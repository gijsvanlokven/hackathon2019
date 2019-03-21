import express = require('express');
import database from "../database";
import APIEndpoint from "../APIEndpoint";

export default class AchievementEndpoint implements APIEndpoint {
	Name = "achievements"
	get Router() {
		return express.Router()
			.get('/', this.GetList);
	}

	async GetList(req: express.Request, res: express.Response) {
		if (!req.cookies["UserID"]) {
			res.status(403).send({ error: "Not authenticated.", errorCode: 403 });
			return;
		}
		let result = await database.query(`SELECT Name FROM Achievement WHERE UserID = '${req.cookies["UserID"]}';`)
		if (result)
			res.send(result.results.map(x => x.Name));
		else res.status(404).send({ error: "Not found", errorCode: 404 });
	}
}
