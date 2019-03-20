let express = require("express");
let util = require("util");

class AsyncRouter {
	constructor() {
		return express.Router.call(this, arguments);
	}
	get(path, func) {
		if (typeof path == "function")
			func = path;
		if (func instanceof Promise)
			Promise.resolve(AsyncRouter.super_.prototype.get.apply(this, arguments));
		else
			AsyncRouter.super_.prototype.get.apply(this, arguments);
	}
}

util.inherits(AsyncRouter, express.Router);


module.exports = AsyncRouter;