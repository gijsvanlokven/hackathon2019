import express = require('express');
import database from "../database";
import APIEndpoint from "../APIEndpoint";

export default class CoursesEndpoint implements APIEndpoint {
	Name = "courses"
	get Router() {
		return express.Router()
			.get('/', this.get);
	}

	async get(req: express.Request, res: express.Response) {
		let result = await database.query("SELECT * FROM Course;");
		if (result && result.results.length > 0)
			res.send(result.results);
		else res.sendStatus(404);
	}
}