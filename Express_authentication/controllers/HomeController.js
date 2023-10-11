const model = require("../models/index");
const moment = require("moment");
const { Op } = require("sequelize");
const { validationResult } = require("express-validator");
const validate = require("../utils/validate");

module.exports = {
  index: async (req, res) => {
    const userName = req.session.userLogin?.name;
    const user = model.User;
    const userList = await user.findAll();
    const { keyword, status } = req.query;
    const filters = {};
    if (status === "active" || status === "inactive") {
      filters.status = status === "active" ? 1 : 0;
    }

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

    const msg = req.flash("msg");

    res.render("home/index", {
      userName,
      userList,
      user,
      moment,
      req,
      msg,
    });
  },

  handleLogout: (req, res) => {
    req.session.destroy();
    res.redirect("/auth/login");
  },

  create: async (req, res) => {
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    // console.log(validate.getError(errors, "name"));
    res.render("home/create", { msg, errors, validate });
  },

  store: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      //Thêm dữ liệu
      const user = await model.User;
      console.log(user);
      console.log(req.body);
      user.create(req.body);
      req.flash("msg", "Thêm khách hàng thành công");
      res.redirect("/");
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng nhập đúng thông tin");
      res.redirect("/create");
    }
  },

  getEdit: async (req, res, next) => {
    const { id } = req.params;
    const user = await model.User;
    const userDetail = await user.findByPk(id);
    if (!userDetail) {
      //Xử lý lỗi
      next(createError(404));
      return;
    }
    const msg = req.flash("msg");
    const errors = req.flash("errors");

    res.render("home/edit", {
      msg,
      errors,
      validate,
      userDetail,
    });
  },

  handleEdit: async (req, res) => {
    const { id } = req.params;
    const user = await model.User;
    const userDetail = await user.findByPk(id);

    if (!userDetail) {
      //Xử lý lỗi
      next(createError(404));
      return;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const userData = req.body;
      if (!userData.password) {
        delete userData.password;
      }

      await user.update(userData, {
        where: {
          id: id,
        },
      });

      req.flash("msg", "Cập nhật thành công");
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
    }

    res.redirect("/");
  },

  handleDestroy: async (req, res) => {
    const { id } = req.params;
    const user = await model.User;
    await user.destroy({
      where: {
        id: id,
      },
      force: false, //Xóa vĩnh viễn
    });
    req.flash("msg", "Xóa thành công");
    res.redirect("/");
  },

  handleDestroyChecked: async (req, res) => {
    const selectedCustomerIds = JSON?.parse(req.body.selectedCustomerIds);
    console.log(`result: ${selectedCustomerIds}`);
    if (selectedCustomerIds) {
      req.flash("msg", "Bạn cần chọn các mục cần xóa!");
      req.redirect("/");
    } else {
      const user = await model.User;
      await user.destroy({
        where: {
          id: {
            [Op.or]: selectedCustomerIds,
          },
        },
        force: true,
      });

      req.flash("msg", "Xóa đã chọn thành công");
      res.redirect("/");
    }
  },
};
