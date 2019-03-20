"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const database_1 = __importDefault(require("../database"));
class CoursesEndpoint {
    constructor() {
        this.Name = "courses";
    }
    get Router() {
        return express.Router()
            .get('/', this.GetList)
            .get("/:id", this.GetItem)
            .post("/", this.AddItem);
    }
    async GetList(req, res) {
        let result;
        if (req.query["lang"])
            result = await database_1.default.query(`SELECT * FROM Course WHERE Language = '${req.query["lang"]}';`);
        else
            result = await database_1.default.query("SELECT * FROM Course;");
        if (result && result.results.length > 0)
            res.send(result.results);
        else
            res.status(404).send({ error: "Not found", errorCode: 404 });
    }
    async GetItem(req, res) {
        let result = await database_1.default.query(`SELECT * FROM Course WHERE CourseID = ${req.params["id"]}`);
        if (result && result.count > 0)
            res.send(result.results[0]);
        else
            res.status(404).send({ error: "Not found.", errorCode: 404 });
    }
    async AddItem(req, res) {
        let course = {
            Name: req.body["Name"],
            Description: req.body["Description"],
            Language: req.body["Language"]
        };
        if (!Object.values(course).includes(undefined)) {
            try {
                await database_1.default.query(`INSERT INTO Course VALUES ('${course.Name}', '${course.Description}','${course.Language}',0,${req.cookies["UserID"] || 0});`);
                res.send(course);
            }
            catch (err) {
                res.sendStatus(400);
            }
        }
        else
            res.sendStatus(400);
    }
}
exports.default = CoursesEndpoint;
//# sourceMappingURL=CoursesEndpoint.js.map