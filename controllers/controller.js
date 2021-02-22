const express = require("express");
const path = require('path');
const router = express.Router();


// test setup

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '../helloworld.html'));

});

module.exports = router;