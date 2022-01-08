// const jwt = require("jsonwebtoken");

// verification du token //
// module.exports = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
//     const userId = decodedToken.id_user;
//     if (req.body.id_user && req.body.id_user !== userId) {
//       throw "Invalid user ID";
//     } else {
//       next();
//     }
//   } catch (error) {
//     res.status(401).json({ error: error | "Requete non authentifiée !" });
//   }
// };


const jwt = require("jsonwebtoken");
const dbc = require("../config/db");

// verification du token //
module.exports = (req, res, next) => {
  const jwt = require("jsonwebtoken");

  // verification du token //
  module.exports = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
      const userId = decodedToken.userId;
      if (req.body.userId && req.body.userId !== userId) {
        throw "Invalid user ID";
      } else {
        next();
      }
    } catch (error) {
      res.status(401).json({ error: error | "Requete non authentifiée !" });
    }
  };
};