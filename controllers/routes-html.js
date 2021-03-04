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
  app.get('/encounters/:id/:charId', async (req, res) => {
    console.log('Querying encounter ID = ', req.params.id);
    console.log('Querying Char ID =', req.params.charId);
    const charID = req.params.charID
    if(req.params.id === -1) {
      console.log("character finished game... do something here")
      res.render('index')
    }

    const encounter = await db.encounters.findAll({
      where: {
        id: req.params.id,
      },
      include: {
        model: db.options,
        encounterId: req.params.id,
      },
    })

    const char = await db.activeChar.findOne({
      where: {
        id: req.params.charId,
      }
    })
    const encounterObj = buildEncounter(encounter, char);
    // passes charId provided in route address back to next encounter
    encounterObj.charId = req.params.charId
    console.log("Returning next encounter...")
    res.render('encounter', encounterObj);
      });

  function buildEncounter(results, char) {
    const encounterObj = {
      encounterText: results[0].dataValues.encounterText,
      options: [],
    };

    results[0].dataValues.options.forEach((opt) => {
      let choiceObj = {
        optionText: (opt.dataValues.optionText),
        id: (opt.dataValues.id),
        stateChange: opt.stateChange,
        checkState: opt.dataValues.checkState
      }
      encounterObj.options.push(choiceObj)
    });
    encounterObj.options.forEach(el => {
      if (el.checkState && el.checkState.indexOf('!') === -1 && char[el.checkState] === false) {
        console.log('splicing positive check');
        encounterObj.options.splice(el, 1);
      } 
      if (el.checkState && el.checkState.indexOf('!') === 0 && char[(el.checkState).substring(1)] === true) {
        console.log('splicing negative check');
        encounterObj.options.splice(el, 1);
      } 
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
