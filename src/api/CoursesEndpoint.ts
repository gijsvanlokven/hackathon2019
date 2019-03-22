import express = require('express');
import database from "../database";
import APIEndpoint from "../APIEndpoint";

export default class CoursesEndpoint implements APIEndpoint {
	Name = "courses"
	get Router() {
		return express.Router()
			.get('/recommended', this.GetRecommended)
			.get('/', this.GetList)
			.get("/:id", this.GetItem)
			.post("/", this.AddItem)
			.put("/:id", this.EditItem);

	}

	async GetList(req: express.Request, res: express.Response) {
		let result: { results: any[], count: number, columns: any[] };
		if (req.query["lang"])
			result = await database.query(`SELECT * FROM Course WHERE Language = '${req.query["lang"]}';`)
		else
			result = await database.query("SELECT * FROM Course;");
		if (result && result.results.length > 0)
			res.send(result.results);
		else res.status(404).send({ error: "Not found", errorCode: 404 });
	}

	async GetItem(req: express.Request, res: express.Response) {
		let result = await database.query(`SELECT * FROM Course WHERE CourseID = ${req.params["id"]}`);
		let firstQuestion = await database.query(`SELECT QuestionID FROM Question WHERE CourseID = ${req.params["id"]} ORDER BY QuestionID ASC LIMIT 1;`);
		if (result && result.count > 0)
			res.send({ ...result.results[0], NextQuestion: firstQuestion.results[0] });
		else res.status(404).send({ error: "Not found.", errorCode: 404 })
	}

	async AddItem(req: express.Request, res: express.Response) {
		let course = {
			Name: req.body["Name"],
			Description: req.body["Description"],
			Language: req.body["Language"],
			Difficulty: req.body["Difficulty"]
		}

		if (!Object.values(course).includes(undefined)) {
			try {
				await database.query(`INSERT INTO Course (Name, Description, Language, Difficulty, OwnerID) VALUES ('${course.Name}', '${course.Description}','${course.Language}',${course.Difficulty},${req.cookies["UserID"] || 1});`);
				let courseID = await database.query(`SELECT CourseID FROM Course ORDER BY CourseID DESC LIMIT 1;`);
				res.send({ id: courseID.results[0].CourseID})
			}
			catch (err) {
				res.status(400).send(err);
			}
		}
		else res.sendStatus(400);
	}

	async EditItem(req: express.Request, res: express.Response) {
		let course = {
			Name: req.body["Name"],
			Description: req.body["Description"],
			Language: req.body["Language"],
			Difficulty: req.body["Difficulty"]
		}

		if (!Object.values(course).includes(undefined)) {
			try {
				await database.query(`UPDATE Course SET Name = '${course.Name}', Description = '${course.Description}', Language = '${course.Language}', Difficulty = '${course.Difficulty}' WHERE CourseID = ${req.params["id"]};`);
				res.sendStatus(200);
			}
			catch (err) {
				res.sendStatus(400);
			}
		}
		else res.sendStatus(400);
	}

	async GetRecommended(req: express.Request, res: express.Response) {
		let result = await database.query(`SELECT * FROM Course ORDER BY Rating DESC LIMIT 5;`);
		if (result && result.count > 0)
			res.send(result.results);
		else res.status(404).send({ error: "Not found.", errorCode: 404 })
	}

}
