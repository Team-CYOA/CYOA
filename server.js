//express server

const express = require('express');
const app = express();
//const angular;
//const routes  = require('./controllers/controller');
const db = require('./models');

// Static file serving
//app.use(express.static("public"));

//parsing 

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Angular Engine Here


// port
const PORT = 3000

//route
//app.use(routes);

// sync with sql db and listen

db.sequelize.sync({ force: true }).then(() => {
    app.listen((process.env.PORT || PORT), () => console.log(`Listening on PORT ${PORT}`));
  });