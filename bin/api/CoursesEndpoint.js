"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const database_1 = __importDefault(require("../database"));
class CoursesEndpoint {
    constructor() {
        this.Name = "courses";
    }
    get Router() {
        return express.Router()
            .get('/', this.get);
    }
    async get(req, res) {
        let result = await database_1.default.query("SELECT * FROM Course;");
        if (result && result.results.length > 0)
            res.send(result.results);
        else
            res.sendStatus(404);
    }
}
exports.default = CoursesEndpoint;
//# sourceMappingURL=CoursesEndpoint.js.map