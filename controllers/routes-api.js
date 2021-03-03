const express = require('express');
const router = express.Router();
const db = require('../models/index.js');

module.exports = function(app) {

  // get specific encounter information
  app.get('/api/encounters/:id', (req, res) => {
    console.log('Querying encounter ID = ', req.params.id);

    db.encounters.findAll({
      where: {
        id: req.params.id,
      },
      include: {
        model: db.options,
        encounterId: req.params.id,
      },
    })
      .then((results) => {
        const encounterObj = buildEncounter(results);
        console.log("Encounter returned")
        res.json(encounterObj);
      });
  });

  // used here and in routes-html.js
  function buildEncounter(results) {
    const encounterObj = {
      encounterText: results[0].dataValues.encounterText,
      options: [],
    };

    results[0].dataValues.options.forEach((opt) => {
      let choiceObj = {
        optionText: (opt.dataValues.optionText),
        id: (opt.dataValues.id)
      }

      encounterObj.options.push(choiceObj)
    });

    return encounterObj;
  }

  // Get all characters as array of objects
  app.get('/api/characters', (req, res) => {
    console.log('Request received for initial encounter');

    db.activeChar.findAll().then((characters) => {
      console.log('Found Active Characters ', characters.length);

      const charArr = [];

      characters.forEach((charObj) => {
        charArr.push(charObj.dataValues);
      });
      
      console.log("Returning Character Array")
      res.json(charArr);
    });
  });

  // Get single characters
  app.get('/api/characters/:id', (req, res) => {
    console.log('Request received for single character');

    db.activeChar.findOne({ where: { id: req.params.id } }).then((character) => {
      console.log('Found Active Character', character.dataValues);

      res.json(character);
    });
  });

  // post character by name
  app.post("/api/characters/:name", function(req, res) {
    console.log("Creating New Char")
      const newChar = {
          name: req.params.name,
          hasShoes: true,
          hasTools: false,
          hasSpacesuit: false,
          engineDestroyed: false,
          canTrade: false
      }

      db.activeChar.create(newChar)
        .then(function(data) {
          res.status(201).json(data)
          console.log("New Character Added to DB!")
        })
  });

  // cet options by id
  app.get("/api/options/:id", function(req, res) {
    console.log("Request for GET single Option")
    db.options.findOne({ where: { id: req.params.id } })
    .then(option => {
        console.log("Returning Option")
        res.json(option);
    });
  }); 

  // update by char id that char's current event
  app.put('/api/characters/:charId/:encId', (req, res) => {
    console.log('Request received for updating character');
    // geet the activeChar then update it
    db.activeChar.findOne({
      where: { id: req.params.charId }
    })
    .then(character => {
      console.log("Updating... ", character.dataValues)
      character.update({
        currentEncounter: req.params.encId
      });
    })
    .then(function() {
      console.log("Update Char Complete")
      res.end()
    });
  });

}