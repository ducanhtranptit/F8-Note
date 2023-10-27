var express = require("express");
var router = express.Router();

var UserController = require("../controllers/UserController");

/* GET users listing. */
router.get("/", UserController.index);
router.get("/view/:id", UserController.view);
router.post("/", UserController.store);
router.put("/:id", UserController.updatePut);

module.exports = router;
