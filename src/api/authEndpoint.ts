import express = require('express');
import axios from 'axios';
import APIEndpoint from '../APIEndpoint';
//@ts-ignore
import config = require("../../config");
import database from '../database';

import { google } from "googleapis";

let auth: any;
export default class authEndpoint implements APIEndpoint {
  Name = "auth";
  get Router() {
    return express.Router().
      get("/:provider", (req: express.Request, res: express.Response) => {
        if (req.params["provider"] == "github")
          res.redirect(`https://github.com/login/oauth/authorize?client_id=${config.github.ClientID}&redirect_uri=http://energylog.nl/api/auth/github/redirect&scope=read:user user:email`);
        if (req.params["provider"] == "google") {

          auth = new google.auth.OAuth2(config.google.ClientID, config.google.ClientSecret, "https://energylog.nl/api/auth/google/redirect")
          res.redirect(auth.generateAuthUrl({
            scope: ["profile", "email"],
            prompt: "select_account"
          }))
        }
        else res.send("Server does not exist");
      })
      .get('/github/redirect', async (req, res) => {
        // The req.query object has the query params that
        // were sent to this route. We want the `code` param
        const requestToken = req.query.code
        let response = await axios({
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

        response = await axios({
          method: 'get',
          url: 'https://api.github.com/user',
          headers: {
            "Content-Type": 'application/json',
            Authorization: `token ${accessToken}`
          }
        });

        let data = response.data;
        let existingUser = await database.query(`SELECT UserID FROM UserAccount WHERE GithubID = '${data.id}' OR Email = '${data.email}';`);
        if (existingUser.count == 0) {
          await database.query(`INSERT INTO UserAccount (GithubID,UserID,ProfilePicture, Email) VALUES ('${data.id}', '${data.login}', '${data.avatar_url || data.gravatar_id}', '${data.email}');`);
          existingUser = await database.query(`SELECT UserID FROM UserAccount WHERE UserName = '${data.login}';`);
        }

        res.cookie("UserID", existingUser.results[0].UserID);
        res.redirect("/pages/index.php");
      })
      .get("/google/redirect/", async (req, res) => {
        const { tokens } = await auth.getToken(req.query["code"]);
        auth.setCredentials(tokens);
        const oauth = google.oauth2({
          version: 'v1',
          auth
        });
        let me: any;
        try {
          me = await oauth.userinfo.get();
        }
        catch (error) {
          console.error(error);
          res.send({ error: "not logged in." });
          return;
        }
        let existingUser = await database.query(`SELECT UserID FROM UserAccount WHERE GoogleID = '${me.data.id}' OR Email = '${me.data.email}';`);
        if (existingUser.count == 0) {
          await database.query(`INSERT INTO UserAccount (GoogleID,UserID,ProfilePicture, Email) VALUES ('${me.data.id}', '${me.data.given_name}', '${me.data.picture}', '${me.data.email}');`);
          existingUser = await database.query(`SELECT UserID FROM UserAccount WHERE UserName = '${me.data.given_name}';`);
        }

        res.cookie("UserID", existingUser.results[0].UserID);
        res.redirect("/pages/index.php");
      });
  }
}
