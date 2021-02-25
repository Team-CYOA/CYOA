const express = require("express");
const path = require('path');
const router = express.Router();

// need a path to the model

// // GET routes HERE
// index/splash screen
router.get("/", function(req, res) {
    console.log("Request received for index...")
    res.render("index");
});


// initial event
router.get("/events", function(req, res) {

});

// subsequent events
router.get("/characters/:id", function(req, res) {

});


// index/splash screen
router.get("/events/:id", function(req, res) {

});


module.exports = router;