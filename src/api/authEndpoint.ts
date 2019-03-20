let express = require('express');
let axios = require('axios');
import APIEndpoint from '../APIEndpoint';

export default class authEndpoint implements APIEndpoint {
  Name = "auth";

  get Router() {
    return express.Router()
      .get('/oauth/redirect', async (req, res) => {
        // The req.query object has the query params that
        // were sent to this route. We want the `code` param
        const requestToken = req.query.code
        let response = await axios({
          // make a POST request
          method: 'post',
          // to the Github authentication API, with the client ID, client secret
          // and request token
          url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
          // Set the content type header, so that we get the response in JSOn
          headers: {
            accept: 'application/json'
          }
  )
      }
  // Once we get the response, extract the access token from
  // the response body
  const accessToken = response.data.access_token

    let response = await axios({
      method: 'post',
      url: 'https://api.github.com/user',
      headers: {
        accept: 'application/json',
        Authorization: `Basic ${accessToken}`
      }
    })
    console.log(response);

  };
}
}
