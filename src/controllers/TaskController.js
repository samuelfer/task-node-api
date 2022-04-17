const { express } = require("express");
const {v4: uuid} = require("uuid");
const Task = require("../models/Tasks");

module.exports = {
    async get(request, response) {
        try {
            const tasks = await Task.find();
           return response.status(200).json({ tasks });
        } catch (err) {
            return response.status(500).json({ error: err.message });
        }
    },

    async store(request, response) {
        const { title, description } = request.body;

        if(!title || !description) {
            return response.status(400).json({ error: "Missing title or description" });
        }

        const task = new Task({
            _id: uuid(),
            title,
            description,
            status: false
        });

        try {
            await task.save();
            return response.status(201).json({ message: "Task created successfully" });
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
};