"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const database_1 = __importDefault(require("../database"));
class QuestionsEndpoint {
    constructor() {
        this.Name = "questions";
    }
    get Router() {
        return express.Router()
            .get('/', this.GetList)
            .get("/:id", this.GetItem)
            .post("/", this.AddItem)
            .put("/:id", this.EditItem);
    }
    async GetList(req, res) {
        let result;
        if (req.query["course"])
            result = await database_1.default.query(`SELECT * FROM Question WHERE CourseID = '${req.query["course"]}';`);
        else
            result = await database_1.default.query("SELECT * FROM Question;");
        if (result && result.results.length > 0)
            res.send(result.results);
        else
            res.status(404).send({ error: "Not found", errorCode: 404 });
    }
    async GetItem(req, res) {
        let result = await database_1.default.query(`SELECT * FROM Question WHERE QuestionID = ${req.params["id"]}`);
        if (result && result.count > 0) {
            let data = result.results[0];
            res.send(Object.assign({ Question: data.Question }, data.DATA));
        }
        else
            res.status(404).send({ error: "Not found.", errorCode: 404 });
    }
    async AddItem(req, res) {
        let question = {
            CourseID: req.body["CourseID"],
            Question: req.body["Question"],
            DATA: req.body["DATA"]
        };
        if (!Object.values(question).includes(undefined)) {
            try {
                await database_1.default.query(`INSERT INTO Question (CourseID, Question, DATA) VALUES (${question.CourseID}, '${question.Question}','${question.DATA}');`);
                res.send(question);
            }
            catch (err) {
                res.sendStatus(400);
            }
        }
        else
            res.sendStatus(400);
    }
    async EditItem(req, res) {
        let question = {
            CourseID: req.body["CourseID"],
            Question: req.body["Question"],
            DATA: req.body["DATA"]
        };
        if (!Object.values(question).includes(undefined)) {
            try {
                await database_1.default.query(`UPDATE Question SET CourseID = ${question.CourseID}, Question = '${question.Question}', DATA = '${question.DATA}' WHERE QuestionID = ${req.params["id"]};`);
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
exports.default = QuestionsEndpoint;
//# sourceMappingURL=QuestionsEndpoint.js.map