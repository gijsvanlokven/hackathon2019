import express = require('express');
import database from "../database";
import APIEndpoint from "../APIEndpoint";

export default class UserCourseEndpoint implements APIEndpoint {
	Name = "usercourse"
	get Router() {
		return express.Router()
			.get("/", this.GetItem)
			.post("/:id", this.AddItem);
	}

  async GetItem(req: express.Request, res: express.Response) {
		let result = await database.query("SELECT * FROM UserCourse;");
		if (result && result.results.length > 0)
			res.send(result.results);
		else res.status(404).send({ error: "Not found", errorCode: 404 });
	}

  async AddItem(req: express.Request, res: express.Response) {
    try {
      await database.query(`INSERT INTO UserCourse (UserID, CourseID) VALUES (${req.cookies["UserID"]}, ${req.params["id"]});`);
      res.sendStatus(200);
    }
    catch (err) {
      res.sendStatus(400);
    }
	}

}
