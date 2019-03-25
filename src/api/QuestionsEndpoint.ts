import express = require('express');
import database from "../database";
import APIEndpoint from "../APIEndpoint";

export default class QuestionsEndpoint implements APIEndpoint {
	Name = "questions"
	get Router() {
		return express.Router()
			.get('/', this.GetList)
			.get("/lastID", this.MaxID)
			.get("/:id", this.GetItem)
			.post("/:id", this.AddItem)
			.put("/:id", this.EditItem);
	}

	async GetList(req: express.Request, res: express.Response) {
		let result: { results: any[], count: number, columns: any[] };
		if (req.query["course"])
			result = await database.query(`SELECT * FROM Question WHERE CourseID = '${req.query["course"]}';`)
		else
			result = await database.query("SELECT * FROM Question;");
		if (result && result.results.length > 0)
			res.send(result.results);
		else res.status(404).send({ error: "Not found", errorCode: 404 });
	}

	async GetItem(req: express.Request, res: express.Response) {
		let result = await database.query(`SELECT * FROM Question WHERE QuestionID = ${req.params["id"]}`);
		if (result && result.count > 0) {
			let data = result.results[0];
			res.send({ Question: data.Question, ...data.DATA });
		}
		else res.status(404).send({ error: "Not found.", errorCode: 404 })
	}

	async AddItem(req: express.Request, res: express.Response) {
		let CourseID = req.params["id"];
		if (Array.isArray(req.body)) {
			let query = "INSERT INTO Question (CourseID, Question, DATA) VALUES";
			let values: string[] = [];
			for (let i = 0; i < req.body.length; i++) {
				let body = req.body[i];
				let question = {
					CourseID: CourseID,
					Question: body["Question"],
					DATA: body
				}
				values.push(`(${question.CourseID}, '${question.Question}','${JSON.stringify(question.DATA)}')`);
			}
			try {
				await database.query(query + values.join() + ";");
				res.sendStatus(200);
			}
			catch (err) {
				res.status(400).send(err);
			}
		}
		else {

			let question = {
				CourseID: CourseID,
				Question: req.body["Question"],
				DATA: req.body
			}

			if (!Object.values(question).includes(undefined)) {
				try {
					await database.query(`INSERT INTO Question (CourseID, Question, DATA) VALUES (${question.CourseID}, '${question.Question}','${JSON.stringify(question.DATA)}');`);
					res.sendStatus(200);
				}
				catch (err) {
					res.sendStatus(400);
				}
			}
			else res.sendStatus(400);
		}
	}

	async EditItem(req: express.Request, res: express.Response) {
		let question = {
			CourseID: req.body["CourseID"],
			Question: req.body["Question"],
			DATA: req.body["DATA"]
		}

		if (!Object.values(question).includes(undefined)) {
			try {
				await database.query(`UPDATE Question SET CourseID = ${question.CourseID}, Question = '${question.Question}', DATA = '${question.DATA}' WHERE QuestionID = ${req.params["id"]};`);
				res.sendStatus(200);
			}
			catch (err) {
				res.sendStatus(400);
			}
		}
		else res.sendStatus(400);
	}
	async MaxID(req, res) {
		let result = await database.query("SELECT AUTO_INCREMENT AS LastID FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'Hackathon' AND TABLE_NAME  = 'Question'");
		res.send(result.results[0]);
	}
}
