const express = require('express');
const router = express.Router();
const db = require('../models/index.js');

module.exports = function(app) {


  // index/splash screen
  app.get('/', (req, res) => {
    console.log('Request received for index...');
    res.render('index');
  });

  // index/splash screen
  app.get('/credits', (req, res) => {
    console.log('Request received for credits...');
    res.render('credits');
  });

  // specific encounter, with charId
  app.get('/encounters/:id/:charId', (req, res) => {
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
        // passes charId provided in route address back to next encounter
        encounterObj.charId = req.params.charId
        console.log("Returning next encounter...")
        res.render('encounter', encounterObj);
      });
  });

  function buildEncounter(results) {
    const encounterObj = {
      encounterText: results[0].dataValues.encounterText,
      options: [],
    };

    results[0].dataValues.options.forEach((opt) => {
      let choiceObj = {
        optionText: (opt.dataValues.optionText),
        id: (opt.dataValues.id),
        stateChange: opt.stateChange
      }
      encounterObj.options.push(choiceObj)
    });

    return encounterObj;
  }

  // create character html
  app.get('/newChar', (req, res) => {
    console.log('Request received for New Game/Create Char...');
    res.render('characterNew');
  });

  // Get all characters
  app.get('/characters', (req, res) => {
    console.log('Request received for Character Select/Continue Game');

    db.activeChar.findAll().then((characters) => {
      console.log('Found Active Characters', characters.length);

      const hbCharObj = {
        chars: []
      };

      characters.forEach((charObj) => {
        let curChar = {
          name: charObj.dataValues.name,
          id: charObj.dataValues.id,
          currentEncounter: charObj.dataValues.currentEncounter
        }

        hbCharObj.chars.push(curChar);
      });
      
      console.log(hbCharObj)

      res.render("characterSelect", hbCharObj);
    });
  });

}
