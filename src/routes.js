const express = require("express");
const TaskController = require("./controllers/TaskController");
const TaskMidlleware = require("./middlewares/TaskMidlleware");
const routes = express.Router();

routes.get("/", (request, response) => res.send('God is very good'));
routes.get("/tasks", TaskController.get);
routes.post("/tasks", TaskController.store);

routes.put("/tasks/:id", TaskMidlleware.validateId, TaskController.update);

module.exports = routes;