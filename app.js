let express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan'),
  database = require('./src/database'),
  config = require("./config.js");

  new database(config.database.username, config.database.password, config.database.host);

// a list with all endpoints.
const endpoints = [require("./src/api/CoursesEndpoint")];

let app = express();

//setup with different middlewares
app.use(logger('dev'),express.json(),express.urlencoded({ extended: false }),cookieParser());


//register each endpoint to the server.
endpoints.forEach(x => {
  app.use(x.name, x.router);
});

//host the static files. apache should handle this but it is a fail safe and for localhost
app.use(express.static(path.join(__dirname, 'public')));


app.use((err, req, res, next) => {
  res.status(404).send();
});

app.listen(process.env.PORT || 8080);
