"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const database_1 = __importDefault(require("./database"));
const config_1 = __importDefault(require("../config"));
const CoursesEndpoint_1 = __importDefault(require("./api/CoursesEndpoint"));
const authEndpoint_1 = __importDefault(require("./api/authEndpoint"));
new database_1.default(config_1.default.database.username, config_1.default.database.password, config_1.default.database.host);
// a list with all endpoints.
const endpoints = [new CoursesEndpoint_1.default(), new authEndpoint_1.default()];
let app = express();
//setup with different middlewares
app.use(morgan_1.default('dev'), express.json(), express.urlencoded({
    extended: false
}), cookie_parser_1.default());
//register each endpoint to the server.
app.get('/api/', (req, res) => {
    res.send(endpoints.map(x => x.Name).join());
});
endpoints.forEach(x => {
    app.use("/api/" + x.Name, x.Router);
});
//host the static files. apache should handle this but it is a fail safe and for localhost
app.use(express.static('public'));
app.use((req, res) => {
    res.status(404).send("help");
});
console.log("Started server on port: 8080");
app.listen(8080);
//# sourceMappingURL=app.js.map