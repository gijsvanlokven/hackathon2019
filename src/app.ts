import express = require('express');
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import database from './database';
import config from "../config";
import APIEndpoint from "./APIEndpoint";
import CoursesEndpoint from "./api/CoursesEndpoint";
new database(config.database.username, config.database.password, config.database.host);

// a list with all endpoints.
const endpoints: APIEndpoint[] = [];

let app = express();

//setup with different middlewares
app.use(logger('dev'), express.json(), express.urlencoded({
  extended: false
}), cookieParser());


//register each endpoint to the server.
endpoints.forEach(x => {
  app.use(x.Name, x.Router);
});

//host the static files. apache should handle this but it is a fail safe and for localhost
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res) => {
  res.status(404).send();
});

app.listen(process.env.PORT || 8080);