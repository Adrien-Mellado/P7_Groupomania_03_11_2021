const mysql = require("mysql")

//connexion
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : "groupomania"
  });
  
 module.exports.getDB = () => {
     return db
 }