/* mise en place de express */
const express = require('express');
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();
const path = require ('path');
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));




// Configuration des headers pour le CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE , OPTIONS");
  next();
});


/* Connection a la database */ 

/* importez sequelize */ 
 const Sequelize = require ('sequelize');

 const sequelize = new Sequelize('DB', 'DB_USER', 'DB_PASS', {
     host: 'DB_HOST',
     port:3306,
     dialect:'mysql'
   });


   
//    async function myFunction() {
//      try { 
//       await sequelize.authenticate();
//       let user = await
//       app.get('/user', (req , res ) => {
//         res.send (user)
//       })
    
//     }
//     catch (e) {
//       console.log("non connecte");
//     }

//    }

// myFunction();




  const userRoute = require('./routes/user');


  app.use('/api/user',userRoute);
 
  




 /* exporter express */ 
    module.exports = app;