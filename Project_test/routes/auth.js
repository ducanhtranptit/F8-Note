var express = require("express");
var router = express.Router();

const AuthController = require("../controllers/API/AuthController");

/* GET users listing. */
router.get("/", AuthController.login);
router.post("/", AuthController.handleLogin);

module.exports = router;
