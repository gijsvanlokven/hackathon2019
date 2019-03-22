import express = require('express');
import database from "../database";
import APIEndpoint from "../APIEndpoint";

export default class UserEndpoint implements APIEndpoint {
	Name = "user"
	get Router() {
		return express.Router()
			.get("/me", this.GetItem)
      .get("/:id", this.GetSpecificUser)
      .get("/leaderboard", this.GetLeaderboard);
	}

  async GetItem(req: express.Request, res: express.Response) {
		if (req.cookies["UserID"] >= 0){
			let result = await database.query(`SELECT UserID, Experience, UserName, ProfilePicture FROM UserAccount WHERE UserID = ${req.cookies["UserID"]};`);
			if (result && result.count > 0)
				res.send(result.results[0]);
			else res.status(404).send({ error: "Not found.", errorCode: 404 })
		}
		else{
			res.sendStatus(404);
		}

	}

  async GetSpecificUser(req: express.Request, res: express.Response) {
		let result = await database.query(`SELECT UserID, Experience, UserName, ProfilePicture FROM UserAccount WHERE UserID = ${req.params["id"]};`);
		if (result && result.count > 0)
			res.send(result.results[0]);
		else res.status(404).send({ error: "Not found.", errorCode: 404 })
	}

  async GetLeaderboard(req: express.Request, res: express.Response) {
		let result = await database.query(`SELECT UserID, Experience, UserName, ProfilePicture FROM UserAccount;`);
		if (result && result.count > 0)
			res.send(result.results[0]);
		else res.status(404).send({ error: "Not found.", errorCode: 404 })
	}

}
