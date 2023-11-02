var express = require("express");
var router = express.Router();

var AuthController = require("../controllers/AuthController");

router.post("/login", AuthController.login);
router.get("/login", AuthController.profile);
router.get("/login/refresh-token", AuthController.refreshToken);

module.exports = router;
