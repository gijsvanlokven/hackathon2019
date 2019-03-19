const Oauth2 = require('client-oauth2');

var githubOauth = new Oauth2({
  clientId: 'c77599549e242cb29964',
  clientSecret: 'b7cc0967bad313225c87662132c7763a519ea6da',
  accessTokenUri: 'https://github.com/login/oauth/access_token',
  authorizationUri: 'https://github.com/login/oauth/authorize',
  redirectUri: 'https://www.energylog.nl/auth/github/callback',
  scopes: ['read:user']
})
