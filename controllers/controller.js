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
    console.log("Request received for initial Event")
    
    const eventRender = {
        premiseText: 'You awaken to the sounds of squealing alarms and crackling electronics. Beyond the viewport of your downed spacecraft you can see the hazy outlines of a forested alien world, slightly obscured by the smoke billowing out from your ship. A brief look at the (slightly damaged) ship computer indicates that the atmosphere outside is breathable. You just need to decide what to do next…',
        choices: ['choice1', 'choice2', 'choice3']
    }
    res.render("event", eventRender);
});

// subsequent events
router.get("/characters/:id", function(req, res) {

});


// index/splash screen
router.get("/events/:id", function(req, res) {

});


module.exports = router;