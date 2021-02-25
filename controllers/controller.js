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
        id: req.body.id
    }).then(encounter => {  
        console.log('found encounter', encounter)
        const encounterRender = {
            premiseText: encounter.dataValues.encounterText,
            choices: ['choice1', 'choice2', 'choice3']
        }
        // send to handlebars
        res.render("encounter", encounterRender);
    })
});

module.exports = router;