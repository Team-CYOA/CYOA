const express = require('express');
// import path = require('path');
const router = express.Router();
const db = require('../models/index.js');

// need a path to the model

// // GET routes HERE
// index/splash screen
router.get('/', (req, res) => {
  console.log('Request received for index...');
  res.render('index');
});

// initial encounter (id = 1), render to handlebars
router.get('/encounters', (req, res) => {
  // log in node terminal
  console.log('Querying encounter ID = 1');
  db.encounters.findAll({
    where: { id: 1 },
    include: {
      model: db.options,
      encounterId: 1,
    },
  })
    .then((results) => {
      const encounterObj = buildEncounter(results);
      res.render('encounter', encounterObj);
    });
});

// specific encounter, render to handlebars
router.get('/encounters/:id', (req, res) => {
  // log in node terminal
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
      res.render('encounter', encounterObj);
    });
});

// specific encounter, render to JSON
router.get('/api/encounters/:id', (req, res) => {
  // log in node terminal
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
      res.json(encounterObj);
    });
});

function buildEncounter(results) {
  // encounterText
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


// Get all characters, render to JSON
router.get('/api/characters', (req, res) => {
  // log in node terminal
  console.log('Request received for initial encounter');
  // find the encounter

  db.activeChar.findAll().then((characters) => {
    // send result to handlebars
    console.log('Found Active Characters', characters.length);

    const charArr = [];

    characters.forEach((charObj) => {
      console.log(charObj.dataValues.name);
      charArr.push(charObj.dataValues);
    });

    res.json(charArr);
  });
});

// Get single characters, render to JSON
router.get('/api/characters/:id', (req, res) => {
  // log in node terminal
  console.log('Request received for single character');
  // find the encounter

  db.activeChar.findOne({ where: { id: req.params.id } }).then((character) => {
    // send result to handlebars
    console.log('Found Active Character', character.dataValues);

    res.json(character);
  });
});

// POST here
// post new character

// not working

router.post("/api/characters/:name", function(req, res) {
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
      .then(function() {
        res.end()
        console.log("New Character Added to DB!")
      })
});

// create character
router.get('/newChar', (req, res) => {
  console.log('Request received for index...');
  res.render('characterNew');
});

// Get all characters, render to HTML
router.get('/characters', (req, res) => {
  // log in node terminal
  console.log('Request received for initial encounter');
  // find the encounter

  db.activeChar.findAll().then((characters) => {
    // send result to handlebars
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

module.exports = router;

// choices route
router.get("/api/options/:id", function(req, res) {
  // log in node terminal

  db.options.findOne({ where: { id: req.params.id } })
  .then(option => {
      console.log(option);
      res.json(option);
  });

}); 