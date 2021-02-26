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
    console.log("Request received for initial encounter")
    // find the encounter

    db.encounters.findOne({ where: { id: 1 } }).then(encounter => {
        // send result to handlebars
        console.log('found encounter', encounter)

        const encounterRender = {
            premiseText: encounter.dataValues.encounterText,
            choices: ['choice1', 'choice2', 'choice3']
        }
        // send to handlebars
        res.render("encounter", encounterRender);
    });

});

// specified ID encounter
router.get("/encounters/:id", function(req, res) {
    
    // log in node terminal
    console.log("Request received for Specific encounter, ID = ", req.params.id)

    db.encounters.findOne({ where: { id: req.params.id } }).then(encounter => {
        // send result to handlebars
        console.log('found encounter', encounter)
        const encounterRender = {
            premiseText: encounter.dataValues.encounterText,
            choices: ['choice1', 'choice2', 'choice3']
        }
        // send to handlebars
        res.render("encounter", encounterRender);
    });
});

// Get all characters, render to HTML
router.get("/characters", function(req, res) {
    // log in node terminal
    console.log("Request received for initial encounter")
    // find the encounter

    db.activeChar.findAll().then(characters => {
        // send result to handlebars
        console.log('Found Active Characters', characters.length)

        let charArr = [];

        characters.forEach(charObj => {
            console.log(charObj.dataValues.name);
            charArr.push(charObj.dataValues);
        })

        // res.render("allcharacters", {charArr});
    });

});

// Get all characters, render to JSON
router.get("/api/characters", function(req, res) {
    // log in node terminal
    console.log("Request received for initial encounter")
    // find the encounter

    db.activeChar.findAll().then(characters => {
        // send result to handlebars
        console.log('Found Active Characters', characters.length)

        let charArr = [];

        characters.forEach(charObj => {
            console.log(charObj.dataValues.name);
            charArr.push(charObj.dataValues);
        })

        res.json(charArr);
    });

});

// Get single characters, render to JSON
router.get("/api/characters/:id", function(req, res) {
    // log in node terminal
    console.log("Request received for single character")
    // find the encounter

    db.activeChar.findOne({ where: { id: req.params.id } }).then(character => {
        // send result to handlebars
        console.log('Found Active Character', character.dataValues)

        res.json(character);
    });

});


module.exports = router;

// testing

// initial encounter, defaults to encounter 1
router.get("/choices", function(req, res) {
    // log in node terminal
    
    db.options.findOne({ where: { id: 1 } })
    .then(choices => {
        console.log(choices);
    });

});