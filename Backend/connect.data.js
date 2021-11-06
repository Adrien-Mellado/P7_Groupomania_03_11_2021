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

