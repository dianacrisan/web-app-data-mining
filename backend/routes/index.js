const express = require('express');
const router = express();

const scraperController = require('../controllers/Scraper');

router.get('/', (req, res) => {
    res.send("Welcome to your web scraper page!");
});

router.get('/scraper', (req, res) => {
    res.send("Scraper implementation in progress...");
});

module.exports = router;
