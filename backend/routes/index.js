const express = require('express');
const router = express();

const scraperController = require('../controllers/Scraper');

router.get('/', (req, res) => {
    res.send("Welcome to your web scraper page!");
});

router.get('/scraper', scraperController.getDataFromUrl);

module.exports = router;
