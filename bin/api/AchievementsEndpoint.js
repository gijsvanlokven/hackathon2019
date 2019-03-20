"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const database_1 = __importDefault(require("../database"));
class AchievementEndpoint {
    constructor() {
        this.Name = "achievements";
    }
    get Router() {
        return express.Router()
            .get('/', this.GetList);
    }
    async GetList(req, res) {
        if (!req.cookies["UserID"]) {
            res.status(403).send({ error: "Not authenticated.", errorCode: 403 });
            return;
        }
        let result = await database_1.default.query(`SELECT Name FROM Achievement WHERE UserID = '${req.cookies["UserID"]}';`);
        if (result)
            res.send(result.results.map(x => x.Name));
        else
            res.status(404).send({ error: "Not found", errorCode: 404 });
    }
}
exports.default = AchievementEndpoint;
//# sourceMappingURL=AchievementsEndpoint.js.map