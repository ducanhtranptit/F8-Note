var express = require("express");
var router = express.Router();

const UserController = require("../controllers/UserController");

router.post("/", UserController.handleSendMail);

module.exports = router;
