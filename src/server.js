const express = require("express");
const routes = express.Router();

routes.get('/', (req, res) => res.send('Deus é bom'));

const app = express();

app.use(routes);

app.listen(3333, () => {
    console.log('Back strated at http://localhost:3333');
})