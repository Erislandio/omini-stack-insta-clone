const PostController = require("./controllers/PostController");
const express = require("express");
const routes = new express.Router();

routes.post("/posts", PostController.store);

module.exports = routes;
