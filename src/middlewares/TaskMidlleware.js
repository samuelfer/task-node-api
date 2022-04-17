const { validate: isUuid } = require("uuid");
const Task = require("../models/Tasks");

module.exports = {
    async validateId(request, response, next) {
        const { id } = request.params;

        if (!isUuid(id)) {
            return response.status(400).json({ error: "Invalid ID" });
        }

        try {
            const task = await Task.findById(id);
            response.task = task;
            if (!task) {
                return response.status(404).json({ error: "Taks not found" });
            }
        } catch (err) {
            return response.status(500).json({ error: "Error when trying get id" });
        }
        next();
    }
}