const express = require("express");
const router = express.Router();
const userCtrl = require('../controllers/user_controllers');
const auth = require('../middleware/auth');
const img = require('../middleware/multer-config');


router.post('/register', userCtrl.signup);
router.post('/login'   , userCtrl.login);
// router.get("/:id", auth, img, userCtrl.getUser);
// router.put("/:id", auth, img, userCtrl.modifUser);
// router.delete("/:id", auth, img, userCtrl.suprimerAccount);



module.exports = router;



