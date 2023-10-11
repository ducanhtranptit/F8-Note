const Customer = require("../models/Customer");

module.exports = {
  index: async function (req, res) {
    const customer = await Customer;
    const customerList = await customer.findAll({
      attributes: ["id", "name", "email"],
      order: [["id", "DESC"]],
    });
    res.render("customers/index", { customerList });
  },
};
