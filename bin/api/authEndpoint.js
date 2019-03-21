"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const axios_1 = __importDefault(require("axios"));
//@ts-ignore
const config = require("../../config");
const database_1 = __importDefault(require("../database"));
const googleapis_1 = require("googleapis");
let auth;
class authEndpoint {
    constructor() {
        this.Name = "auth";
    }
    get Router() {
        return express.Router().
            get("/:provider", (req, res) => {
            if (req.params["provider"] == "github")
                res.redirect(`https://github.com/login/oauth/authorize?client_id=${config.github.ClientID}&redirect_uri=http://energylog.nl/api/auth/github/redirect&scope=read:user user:email`);
            if (req.params["provider"] == "google") {
                auth = new googleapis_1.google.auth.OAuth2(config.google.ClientID, config.google.ClientSecret, process.env.NODE_ENV != 'development' ? "http://localhost:8080/api/auth/google/redirect" : "https://eventlog.nl/api/auth/google/redirect");
                res.redirect(auth.generateAuthUrl({
                    scope: ["profile", "email"],
                    prompt: "select_account"
                }));
            }
        })
            .get('/github/redirect', async (req, res) => {
            // The req.query object has the query params that
            // were sent to this route. We want the `code` param
            const requestToken = req.query.code;
            let response = await axios_1.default({
                // make a POST request
                method: 'post',
                // to the Github authentication API, with the client ID, client secret
                // and request token
                url: `https://github.com/login/oauth/access_token?client_id=${config.github.ClientID}&client_secret=${config.github.ClientSecret}&code=${requestToken}`,
                // Set the content type header, so that we get the response in JSOn
                headers: {
                    accept: 'application/json'
                }
            });
            // Once we get the response, extract the access token from
            // the response body
            const accessToken = response.data.access_token;
            response = await axios_1.default({
                method: 'get',
                url: 'https://api.github.com/user',
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `token ${accessToken}`
                }
            });
            let data = response.data;
            let existingUser = await database_1.default.query(`SELECT UserID FROM UserAccount WHERE GithubID = '${data.id}' OR Email = '${data.email}';`);
            if (existingUser.count == 0) {
                await database_1.default.query(`INSERT INTO UserAccount (GithubID,UserID,ProfilePicture, Email) VALUES ('${data.id}', '${data.login}', '${data.avatar_url || data.gravatar_id}', '${data.email}');`);
                existingUser = await database_1.default.query(`SELECT UserID FROM UserAccount WHERE UserName = '${data.login}';`);
            }
            res.cookie("UserID", existingUser.results[0].UserID);
            res.redirect("/pages/index.php");
        })
            .get("/google/redirect/", async (req, res) => {
            const { tokens } = await auth.getToken(req.query["code"]);
            auth.setCredentials(tokens);
            const oauth = googleapis_1.google.oauth2({
                version: 'v1',
                auth
            });
            let me;
            try {
                me = await oauth.userinfo.get();
            }
            catch (error) {
                console.error(error);
                res.send({ error: "not logged in." });
                return;
            }
            let existingUser = await database_1.default.query(`SELECT UserID FROM UserAccount WHERE GoogleID = '${me.data.id}' OR Email = '${me.data.email}';`);
            if (existingUser.count == 0) {
                await database_1.default.query(`INSERT INTO UserAccount (GoogleID,UserID,ProfilePicture, Email) VALUES ('${me.data.id}', '${me.data.given_name}', '${me.data.picture}', '${me.data.email}');`);
                existingUser = await database_1.default.query(`SELECT UserID FROM UserAccount WHERE UserName = '${me.data.given_name}';`);
            }
            res.cookie("UserID", existingUser.results[0].UserID);
            res.redirect("/");
        });
    }
}
exports.default = authEndpoint;
//# sourceMappingURL=authEndpoint.js.map