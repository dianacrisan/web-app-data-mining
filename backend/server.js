const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const routes = require('./routes');

app.use('/', routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`App started on http://localhost:${PORT}`);
});