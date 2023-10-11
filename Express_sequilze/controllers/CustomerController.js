const Customer = require("../models/Customer");
const { Op } = require("sequelize");
const moment = require("moment");

module.exports = {
  index: async function (req, res) {
    const { status, keyword } = req.query;

    const filters = {};

    //tìm kiếm theo status
    if (status === "active" || status === "inactive") {
      filters.status = status === "active" ? 1 : 0;
    }

    //tìm kiếm theo keyword
    if (keyword) {
      filters[Op.or] = [
        {
          name: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          email: {
            [Op.like]: `%${keyword}%`,
          },
        },
      ];
    }

    console.log(filters);

    const customer = await Customer;
    const customerList = await customer.findAll({
      attributes: ["id", "name", "email", "status", "created_at"],
      order: [["id", "DESC"]],
      where: filters,
    });
    res.render("customers/index", { customerList, moment, req });
  },
};
