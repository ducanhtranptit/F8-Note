var express = require("express");
var router = express.Router();
const passport = require("passport");

const AuthController = require("../controllers/Authcontroller");

/* GET users listing. */
router.get("/", AuthController.login);
router.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/login" }),
  AuthController.handleLogin
);
router.get("/register", AuthController.register);
router.post("/register", AuthController.handleRegister);
router.get("/google/redirect", passport.authenticate("google"));
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    failureMessage: true,
    successRedirect: "/",
  })
);

module.exports = router;
