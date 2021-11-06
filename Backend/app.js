/* mise en place de express */
const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });


/* Connection a la database */ 

/* importez sequelize */ 
const Sequelize = require ('sequelize');

const sequelize = new Sequelize('groupomania', 'root', '', {
    host: 'localhost',
    port:3306,
    dialect:'mysql'
  });


  sequelize.authenticate().then(() => {
      console.log("connection réussie!");
  }).catch((err) =>{
    console.log ("Error connection a la database !")
  });

 /* exporter express */ 
    module.exports = app ;