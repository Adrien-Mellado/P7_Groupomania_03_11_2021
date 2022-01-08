const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user_model");
const dbc = require("../config/db");
const { createPool } = require("mysql");
require("dotenv").config();




exports.signup = (req, res, next) => {
  bcrypt
    //recuperation de l'email et du password hash
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = ({
        email: req.body.email,
        password: hash,
      });

      const sql = "INSERT INTO user SET ?";
      const db = dbc.getDB();

      db.query(sql, user, (err, result) => {
        if (!result) {
          res.status(200).json({ message: "Email déjà enregistré" });
        } else {
          res.status(201).json({ message: "User created !" });
        }
      });
    });
};


exports.login = (req, res) => {
  
  const db = dbc.getDB();
  db.query(`SELECT * FROM user Where email = ${db.escape(req.body.email)};` ,(err,result) => {
    if (err){
      throw err ;
      return res.status(400).send({message : err ,});
    }
    if (!result.length){
      return res.status(400).send({message:' Email ou password incorrect'})
    }

    bcrypt.compare(req.body.password, result[0]['password'],(bErr,bResult) =>{
      if (bErr) {
        throw bErr;
        return res.status(400).send({message:' Email ou password incorrect'});
      }

      if (bResult) {
        // password match 
        const token = jwt.sign({
          email: result[0].email,
          id_user : result[0].id,
        } , 'SECRETKEY',{expiresIn : "7d"});

        db.query(`UPDATE user SET date_connection = now() WHERE id_user = ${result[0].id_user};`);

        return res.status(200).send({ 
        
        message : 'connecte !!',
        token , 
        user: result[0]
      })
      }
      return res.status(401).send({
        message : 'Email ou password incorrect'
      })
    })
    
  })
};
  





// //Récupération d'un utilisateur
// exports.getUser = (req, res, next) => {
//   const id = req.params.id;
//   User.findByPk(id)
//     .then((user) => {
//       if (!user) {
//         return statut.responseError(res, 404, "User not found");
//       }
//       res.status(200).json({
//         admin: user.is_admin,
//         profil_image: user.profil_image,
//         id_user: user.id,
//         email: user.email,
//         nom: user.pseudo,
//         prenom: user.prenom,
//         password: user.password,
//       });
//     })
//     .catch((err) => statut.responseError(res, 500, "Internal Server Error"));
// };

// //Modification d'un utilisateur
// exports.modifUser = async (req, res, next) => {
//   let password;
//   if (req.body.password) {
//     password = await bcrypt.hash(req.body.password, 10);
//   }
//   const user = {
//     email: req.body.email,
//     pseudo: req.body.pseudo,
//     password,
//     is_admin: req.body.admin,
//   };
//   if (req.file) {
//     user.profil_picture = `${req.protocol}://${req.get(
//       "host"
//     )}/images/${encodeURIComponent(req.file.filename)}`;
//   }
//   User.update(user, {
//     where: { id: req.params.id },
//   })

//     .then((data) => {
//       return data[0] === 0
//         ? statut.responseError(res, 404, "User not found")
//         : statut.responseSuccess(res, "User modified");
//     })
//     .catch((err) => statut.responseError(res, 500, "Internal Server Error"));
// };


// //Supression d'un utilisateur
// exports.suprimerAccount = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const user = await User.findOne({ where: { id: id } });
//     console.log(user);
//     if (user.profil_picture !== "http://localhost:3000/images/avatar.png") {
//       const filename = user.profil_picture.split("/images")[1];
//       fs.unlink(`images/${filename}`, () => {
//         User.destroy({ where: { id: id } });
//         statut.responseSuccess(res, "Your account has been deleted");
//       });
//     } else {
//       User.destroy({ where: { id: id } });
//       statut.responseSuccess(res, "Your account has been deleted");
//     }
//   } catch (error) {
//     statut.responseError(res, 500, "Internal Server Error");
//   }
// };