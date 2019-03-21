import express = require('express');
import database from "../database";
import APIEndpoint from "../APIEndpoint";

export default class ActivityEndpoint implements APIEndpoint {
	Name = "activity"
	get Router() {
		return express.Router()
			.get("/:id", this.GetItem)
			.post("/", this.AddItem);
	}

  async GetItem(req: express.Request, res: express.Response){
    let result: { results: any[], count: number, columns: any[] };
		result = await database.query(`SELECT * FROM Activity WHERE UserID = ${req.params["id"]};`)
		if (result && result.results.length > 0)
			res.send(result.results);
		else res.status(404).send({ error: "Not found", errorCode: 404 });
  }

  async AddItem(req: express.Request, res: express.Response) {
		let activity = {
      Type: req.body["Type"],
			Description: req.body["Description"]
		}

		if (!Object.values(activity).includes(undefined)) {
			try {
				await database.query(`INSERT INTO Activity (UserID, Type, Description) VALUES (${req.cookies["UserID"], '${activity.Type}','${activity.Description}' || 1});`);
				res.sendStatus(200);
			}
			catch (err) {
				res.sendStatus(400);
			}
		}
		else res.sendStatus(400);
	}
}
