let express = require('express');
let axios = require('axios');
import APIEndpoint from '../APIEndpoint';
import config = require("../../config");
import database from '../database';
export default class authEndpoint implements APIEndpoint {
  Name = "auth";
  get Router() {
    return express.Router().
      get("/:provider", (req, res) => {
        console.log(config);
        if (req.params["provider"] == "github")
          res.redirect(`https://github.com/login/oauth/authorize?client_id=${config.github.ClientID}&redirect_uri=http://localhost:8080/api/auth/github/redirect&scope=read:user user:email`)
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
        console.log(accessToken);

        response = await axios({
          method: 'get',
          url: 'https://api.github.com/user',
          headers: {
            "Content-Type": 'application/json',
            Authorization: `token ${accessToken}`
          }
        });

        // let existingUser = database.query(/*sql*/`INSERT INTO UserAccount VALUES (null, '${response.id}', 0, '${response.login}'', '${response.avatar_url || response.gravatar_id}' ) WHERE NOT EXIST (SELECT 1 FROM UserAccount WHERE GithubID = '${response.id}');`);

      })
  }
}
