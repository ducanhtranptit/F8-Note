const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

const model = require("../models/index");
const { response } = require("express");
const User = model.User;
const ApiKey = model.ApiKey;
const saltRounds = 10;

module.exports = {
	index: async (req, res) => {
		const {
			query,
			order = "asc",
			sort = "createdAt",
			limit,
			page = 1,
		} = req.query;
		const options = {
			attributes: ["id", "name", "email", "createdAt", "updatedAt"],
			order: [[sort, order]],
		};
		if (query) {
			options.where = {
				[Op.or]: [
					{
						name: {
							[Op.like]: `%${query}%`,
						},
					},
				],
			};
		}

		if (limit && Number.isInteger(+limit)) {
			options.limit = +limit;
			const offset = (page - 1) * limit;
			options.offset = offset;
		}
		const { rows: users, count } = await User.findAndCountAll(options);
		const response = {
			status: "success",
			data: users,
			count,
		};
		res.json(response);
	},

	view: async (req, res) => {
		const { id } = req.params;
		console.log(id);
		const user = await User.findByPk(id);
		if (!user) {
			res.status(404).json({
				status: "error",
				error: "Not Found",
			});
			return;
		}

		res.json({
			status: "success",
			data: user,
		});
	},

	store: (req, res) => {
		const { name, email } = req.body;
		const errors = {};
		if (!name) {
			errors.name = "not name";
		}
		if (!email) {
			errors.email = "not email";
		}

		const response = {};

		if (Object.keys(errors).length) {
			Object.assign(response, {
				status: "error",
				errorText: "Validation",
				errors,
			});
			res.status(400).json(response);
			return;
		}
		res.json({});
	},

	updatePut: async (req, res) => {
		const { id } = req.params;
		const user = await User.findByPk(id);
		if (!user) {
			res.status(404).json({
				status: "error",
				error: "Not Found",
			});
			return;
		}
		const { name, email, password } = req.body;

		//validate

		if (password) {
			const hashPassword = bcrypt.hashSync(password, saltRounds);
			req.body.password = hashPassword;
		}

		const body = req.body;

		res.json({
			id,
			body,
		});
	},
};
