const express = require("express");
const path = require('path');
const router = express.Router();
const db = require('../models/index.js');

// need a path to the model

// // GET routes HERE
// index/splash screen
router.get("/", function(req, res) {
    console.log("Request received for index...")
    res.render("index");
});


// initial encounter, defaults to encounter 1
router.get("/encounters", function(req, res) {
    // log in node terminal
    console.log("Request received for encounter 1")
    // find the encounter
    db.encounters.findOne({
        id: 1
    }).then(encounter => {
        // send result to handlebars
        console.log('found encounter', encounter)
        const encounterRender = {
            premiseText: encounter.dataValues.encounterText,
            choices: ['choice1', 'choice2', 'choice3']
        }
        // send to handlebars
        res.render("encounter", encounterRender);
    })
});

// specified ID encounter
router.get("/encounters/:id", function(req, res) {

    // log in node terminal
    console.log("Request received for Specific encounter", req.body.id)

    // find the encounter
    db.encounters.findOne({
        id: 1
    }).then(encounter => {  
        console.log('found encounter', encounter)
        const encounterRender = {
            premiseText: 'You awaken to the sounds of squealing alarms and crackling electronics. Beyond the viewport of your downed spacecraft you can see the hazy outlines of a forested alien world, slightly obscured by the smoke billowing out from your ship. A brief look at the (slightly damaged) ship computer indicates that the atmosphere outside is breathable. You just need to decide what to do next…',
            choices: ['choice1', 'choice2', 'choice3']
        }
        // send to handlebars
        res.render("encounter", encounterRender);
    })
});

module.exports = router;