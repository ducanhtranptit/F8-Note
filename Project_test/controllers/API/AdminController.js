const Customer = require("../../models/Customer");

module.exports = {
  adminHome: (req, res) => {
    const { email, password } = req.session;
    if (true) {
      res.render("admin/AdminHome");
    } else {
      res.redirect("/login");
    }
  },

  getCustomerList: (req, res) => {
    const { email, password } = req.session;
    if (true) {
      res.redirect("/admin/customer");
    } else {
      res.redirect("/login");
    }
  },

  showCustomerList: async function (req, res) {
    const { email, password } = req.session;
    if (true) {
      const customer = await Customer;
      const customerList = await customer.findAll({
        attributes: ["id", "name", "email"],
      });
      res.send(customerList);
    } else {
      res.redirect("/login");
    }
  },

  logout: (req, res) => {
    delete req.session.email;
    delete req.session.password;
    res.redirect("/login");
  },
};
