const express = require("express");
const TaskController = require("./controllers/TaskController");
const routes = express.Router();

routes.get("/", (req, res) => res.send('Deus é bom'));
routes.get("/tasks", TaskController.get);
routes.post("/tasks", TaskController.store);

module.exports = routes;