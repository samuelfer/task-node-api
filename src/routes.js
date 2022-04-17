const express = require("express");
const routes = express.Router();

routes.get('/', (req, res) => res.send('Deus é bom'));

module.exports = routes;