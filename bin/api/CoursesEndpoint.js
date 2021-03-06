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
            .get('/recommended', this.GetRecommended)
            .get('/', this.GetList)
            .get("/:id", this.GetItem)
            .post("/", this.AddItem)
            .put("/:id", this.EditItem);
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
        let firstQuestion = await database_1.default.query(`SELECT QuestionID FROM Question WHERE CourseID = ${req.params["id"]} ORDER BY QuestionID ASC LIMIT 1;`);
        if (result && result.count > 0)
            res.send(Object.assign({}, result.results[0], { NextQuestion: firstQuestion.results[0] }));
        else
            res.status(404).send({ error: "Not found.", errorCode: 404 });
    }
    async AddItem(req, res) {
        let course = {
            Name: req.body["Name"],
            Description: req.body["Description"],
            Language: req.body["Language"],
            Difficulty: req.body["Difficulty"]
        };
        if (!Object.values(course).includes(undefined)) {
            try {
                await database_1.default.query(`INSERT INTO Course (Name, Description, Language, Difficulty, OwnerID) VALUES ('${course.Name}', '${course.Description}','${course.Language}',${course.Difficulty},${req.cookies["UserID"] || 1});`);
                let courseID = await database_1.default.query(`SELECT CourseID FROM Course ORDER BY CourseID DESC LIMIT 1;`);
                res.send({ id: courseID.results[0].CourseID });
            }
            catch (err) {
                res.status(400).send(err);
            }
        }
        else
            res.sendStatus(400);
    }
    async EditItem(req, res) {
        let course = {
            Name: req.body["Name"],
            Description: req.body["Description"],
            Language: req.body["Language"],
            Difficulty: req.body["Difficulty"]
        };
        if (!Object.values(course).includes(undefined)) {
            try {
                await database_1.default.query(`UPDATE Course SET Name = '${course.Name}', Description = '${course.Description}', Language = '${course.Language}', Difficulty = '${course.Difficulty}' WHERE CourseID = ${req.params["id"]};`);
                res.sendStatus(200);
            }
            catch (err) {
                res.sendStatus(400);
            }
        }
        else
            res.sendStatus(400);
    }
    async GetRecommended(req, res) {
        let result = await database_1.default.query(`SELECT * FROM Course ORDER BY Rating DESC LIMIT 5;`);
        if (result && result.count > 0)
            res.send(result.results);
        else
            res.status(404).send({ error: "Not found.", errorCode: 404 });
    }
}
exports.default = CoursesEndpoint;
//# sourceMappingURL=CoursesEndpoint.js.map