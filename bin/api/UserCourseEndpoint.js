"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const database_1 = __importDefault(require("../database"));
class UserCourseEndpoint {
    constructor() {
        this.Name = "usercourse";
    }
    get Router() {
        return express.Router()
            .get("/", this.GetItem)
            .post("/:id", this.AddItem);
    }
    async GetItem(req, res) {
        let result = await database_1.default.query("SELECT * FROM UserCourse;");
        if (result && result.results.length > 0)
            res.send(result.results);
        else
            res.status(404).send({ error: "Not found", errorCode: 404 });
    }
    async AddItem(req, res) {
        try {
            await database_1.default.query(`INSERT INTO UserCourse (UserID, CourseID) VALUES (${req.cookies["UserID"]}, ${req.params["id"]});`);
            res.sendStatus(200);
        }
        catch (err) {
            res.sendStatus(400);
        }
    }
}
exports.default = UserCourseEndpoint;
//# sourceMappingURL=UserCourseEndpoint.js.map