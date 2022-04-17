const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose.connect(process.env.DATABASE_URL);

    const db = mongoose.connection;
    db.on("error", (error) => console.error(error)); //if error
    db.once("open", () => console.log("Connected the database!"));//If connected
}

module.exports = connectToDatabase;