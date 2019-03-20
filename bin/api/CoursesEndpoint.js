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
        res.send(await database_1.default.query("SELECT * FROM Course;"));
    }
}
exports.default = CoursesEndpoint;
