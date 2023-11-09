var express = require("express");
var router = express.Router();

const UserController = require("../controllers/UserController");

router.post("/", UserController.handleLogin);

module.exports = router;
