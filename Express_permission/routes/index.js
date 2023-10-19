var express = require("express");
var router = express.Router();
const model = require("../models/index");
const User = model.User;
const Role = model.Role;
const Permission = model.Permission;

/* GET home page. */
router.get("/", async function (req, res, next) {
	if (req.user) {
		const { id } = req.user;

		const user = await User.findOne({
			where: {
				id,
			},

			include: {
				model: Role,
			},
		});

		const roles = user.Roles;

		let permissions = await Promise.all(
			roles.map(async ({ id }) => {
				const role = await Role.findOne({
					where: { id },
					include: {
						model: Permission,
					},
				});
				return role.Permissions;
			})
		);

		permissions = permissions.map(({ value }) => value);
		console.log(permissions);
	}
	res.render("index", { title: "Express" });
});

module.exports = router;
