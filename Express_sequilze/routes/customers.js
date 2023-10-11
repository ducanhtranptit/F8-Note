var express = require("express");
var router = express.Router();

const customerController = require("../controllers/CustomerController");

router.get("/", customerController.index);

module.exports = router;
