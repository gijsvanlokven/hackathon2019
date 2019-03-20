import express = require("express");
export default interface Endpoint {
	Name: string,
	Router: express.Router
}