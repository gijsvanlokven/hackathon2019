let express = require('express');
let database = require("../database");
module.exports = {
	name: "courses",

	router: express.Router()
		.get('/', (req, res) => {
			res.send(database.query("SELECT * FROM Course;"));
		})
};
