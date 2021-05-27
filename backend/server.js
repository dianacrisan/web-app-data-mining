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


// storing uploaded file in public folder
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

var upload = multer({ storage: storage }).single('file')

app.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
});

app.listen(PORT, () => {
    console.log(`App started on http://localhost:${PORT}`);
});
