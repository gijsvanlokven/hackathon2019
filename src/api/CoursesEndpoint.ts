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
		res.send(await database.query("SELECT * FROM Course;"));
	}
}