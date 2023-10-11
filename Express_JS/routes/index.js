var express = require("express");
var router = express.Router();

//import controller
const HomeController = require("../controllers/HomeController");
const ProductController = require("../controllers/ProductController");
const bodyParser = require("body-parser");

//router defined
router.get("/", HomeController.index);
router.get("/product", ProductController.index);
router.get("/product/add", ProductController.add);
router.post("/product/add", ProductController.handleAdd);
router.get("/product/:id.html", ProductController.get);

module.exports = router;
