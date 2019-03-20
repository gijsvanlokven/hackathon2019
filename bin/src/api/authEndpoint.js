"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let express = require('express');
let axios = require('axios');
const config_1 = __importDefault(require("../../config"));
class authEndpoint {
    constructor() {
        this.Name = "auth";
    }
    get Router() {
        return express.Router()
            .get('/redirect', async (req, res) => {
            // The req.query object has the query params that
            // were sent to this route. We want the `code` param
            const requestToken = req.query.code;
            let response = await axios({
                // make a POST request
                method: 'post',
                // to the Github authentication API, with the client ID, client secret
                // and request token
                url: `https://github.com/login/oauth/access_token?client_id=${config_1.default..clientID}&client_secret=${clientSecret}&code=${requestToken}`,
                // Set the content type header, so that we get the response in JSOn
                headers: {
                    accept: 'application/json'
                }
            });
            // Once we get the response, extract the access token from
            // the response body
            const accessToken = response.data.access_token;
            response = await axios({
                method: 'post',
                url: 'https://api.github.com/user',
                headers: {
                    accept: 'application/json',
                    Authorization: `Basic ${accessToken}`
                }
            });
            console.log(response);
        });
    }
}
exports.default = authEndpoint;
//# sourceMappingURL=authEndpoint.js.map