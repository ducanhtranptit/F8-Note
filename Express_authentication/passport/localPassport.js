const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const model = require("../models/index");

module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async function (email, password, done) {
    const user = await model.User.findOne({
      email,
    });

    if (!user) {
      done({ message: "email invalid" });
      return;
    } else {
      const hash = user.password;

      bcrypt.compare(password, hash, (err, result) => {
        if (result) {
          done(null, user);
        } else {
          done({ message: "Incorrect Password" });
        }
        return;
      });
    }
  }
);
