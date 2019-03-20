import express = require('express');
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import database from './database';
import config = require("../config");
import APIEndpoint from "./APIEndpoint";
import CoursesEndpoint from "./api/CoursesEndpoint";
import QuestionsEndpoint from "./api/QuestionsEndpoint";
import authEndpoint from "./api/authEndpoint";
new database(config.database.username, config.database.password, config.database.host);

// a list with all endpoints.
const endpoints: APIEndpoint[] = [new CoursesEndpoint(), new authEndpoint(), new QuestionsEndpoint()];

let app = express();

//setup with different middlewares
app.use(logger('dev'), express.json(), express.urlencoded({
  extended: false
}), cookieParser());

//register each endpoint to the server.
app.get('/api/', (req, res) => {
  res.send(endpoints.map(x => x.Name).join());
})
endpoints.forEach(x => {
  app.use("/api/" + x.Name, x.Router);
});

//host the static files. apache should handle this but it is a fail safe and for localhost
app.use(express.static('public'));




app.use((req, res) => {
  res.status(404).send("#Define Me = Depressed after trying to find this bug for 2 weeks");
});

console.log("Started server on port: 8080");
app.listen(8080);
