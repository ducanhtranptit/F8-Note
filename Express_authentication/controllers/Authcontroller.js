const bcrypt = require("bcrypt");
const model = require("../models/index");
const passport = require("passport");

module.exports = {
  login: async (req, res) => {
    res.render("auth/login", { pageTitle: "Login" });
  },

  handleLogin: async (req, res) => {
    const { email, password } = req.body;
    // const User = await model.User;
    // const user = await User.findOne({
    //   where: {
    //     email,
    //   },
    // });

    // if (user) {
    //   const { password: hash } = user;

    //   bcrypt.compare(password, hash, function (err, result) {
    //     console.log(result);
    //   });
    // }

    console.log(req.user);

    res.send("<h1>Done</h1>");
  },

  register: async (req, res) => {
    res.render("auth/register", { pageTitle: "Register" });
  },

  handleRegister: async (req, res) => {
    const { name, email, password } = req.body;
    const user = model.User;
    const salt = 10;

    bcrypt.hash(password, salt, async function (err, hash) {
      const data = await user?.create({
        name: name,
        email: email,
        password: hash,
      });
      res.redirect("/login");
    });
  },

  loginGoogle(req, res) {
    res.send("gooogle");
  },
};
