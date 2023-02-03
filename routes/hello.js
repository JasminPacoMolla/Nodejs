const express = require("express");

const helloController = require("../Controllers/hello");

const api = express.Router();

api.get("/hello",helloController.getHello);

module.exports = api;