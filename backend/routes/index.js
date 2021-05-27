const express = require('express');
const router = express();

router.get('/', (req, res) => {
     res.send("Welcome to your web scraper page!");
});

module.exports = router;
