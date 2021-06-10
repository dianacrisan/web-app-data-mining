const express = require('express');
const multer = require('multer')
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

const routes = require('./routes');
app.use('/', routes);

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bodyParser = require('body-parser'); // <=== this line
app.use(bodyParser.json()); //<=== This line

app.listen(PORT, () => {
    console.log(`App started on http://localhost:${PORT}`);
});
