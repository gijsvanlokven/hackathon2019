"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const database_1 = __importDefault(require("../database"));
class ActivityEndpoint {
    constructor() {
        this.Name = "activity";
    }
    get Router() {
        return express.Router()
            .get("/:id", this.GetItem)
            .post("/", this.AddItem);
    }
    async GetItem(req, res) {
        let result;
        result = await database_1.default.query(`SELECT * FROM Activity WHERE UserID = ${req.params["id"]};`);
        if (result && result.results.length > 0)
            res.send(result.results);
        else
            res.status(404).send({ error: "Not found", errorCode: 404 });
    }
    async AddItem(req, res) {
        let activity = {
            Type: req.body["Type"],
            Description: req.body["Description"]
        };
        if (!Object.values(activity).includes(undefined)) {
            try {
                await database_1.default.query(`INSERT INTO Activity (UserID, Type, Description) VALUES (${req.cookies["UserID"], '${activity.Type}', '${activity.Description}' || 1});`);
                res.sendStatus(200);
            }
            catch (err) {
                res.sendStatus(400);
            }
        }
        else
            res.sendStatus(400);
    }
}
exports.default = ActivityEndpoint;
//# sourceMappingURL=ActivityEndpoint.js.map