"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const database_1 = __importDefault(require("../database"));
class UserEndpoint {
    constructor() {
        this.Name = "user";
    }
    get Router() {
        return express.Router()
            .get("/me", this.GetItem)
            .get("/:id", this.GetSpecificUser)
            .get("/leaderboard", this.GetLeaderboard);
    }
    async GetItem(req, res) {
        if (req.cookies["UserID"] >= 0) {
            let result = await database_1.default.query(`SELECT UserID, Experience, UserName, ProfilePicture FROM UserAccount WHERE UserID = ${req.cookies["UserID"]};`);
            if (result && result.count > 0)
                res.send(result.results[0]);
            else
                res.status(404).send({ error: "Not found.", errorCode: 404 });
        }
        else {
            res.sendStatus(404);
        }
    }
    async GetSpecificUser(req, res) {
        let result = await database_1.default.query(`SELECT UserID, Experience, UserName, ProfilePicture FROM UserAccount WHERE UserID = ${req.params["id"]};`);
        if (result && result.count > 0)
            res.send(result.results[0]);
        else
            res.status(404).send({ error: "Not found.", errorCode: 404 });
    }
    async GetLeaderboard(req, res) {
        let result = await database_1.default.query(`SELECT UserID, Experience, UserName, ProfilePicture FROM UserAccount;`);
        if (result && result.count > 0)
            res.send(result.results[0]);
        else
            res.status(404).send({ error: "Not found.", errorCode: 404 });
    }
}
exports.default = UserEndpoint;
//# sourceMappingURL=UserEndpoint.js.map