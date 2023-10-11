var express = require("express");
var router = express.Router();

const CustomerController = require("../controllers/CustomerController");

/* GET home page. */
router.get("/", CustomerController.index);

module.exports = router;
