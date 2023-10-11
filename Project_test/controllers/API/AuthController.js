const Customer = require("../../models/Customer");
const flash = require("connect-flash");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.session;
    const customer = await Customer;
    const customerList = await customer.findAll();
    const emails = [];
    const passwords = [];

    customerList.forEach((customer) => {
      const { email: customerEmail, password: customerPassword } = customer.dataValues;
      emails.push(customerEmail);
      passwords.push(customerPassword);
    });

    if (email && password) {
      const index = emails.findIndex((e) => e === email);
      if (index !== -1 && passwords[index] === password) {
        if (email === "admin@gmail.com") {
          res.redirect("/admin");
        } else {
          res.redirect("/");
        }
      } else {
        delete req.session.email;
        delete req.session.password;
        return res.send(JSON.parse('{"message":"Invalid email or password"}'));
      }
    } else {
      return res.send(JSON.parse('{"message":"Invalid email or password"}'));
    }
  },

  handleLogin: (req, res) => {
    const { email, password } = req.body;

    if (email === "" || password === "") {
      return res.send(JSON.parse('{"message":"Invalid email and password"}'));
    } else {
      req.session.email = email;
      req.session.password = password;
      return res.redirect("/login");
    }
  },
};
