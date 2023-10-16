const model = require("../models/index");
const Role = model.Role;
const Permission = model.Permission;

module.exports = {
	index: async (req, res) => {
		const roles = await Role.findAll();
		res.render("roles/index", { roles });
	},

	add: async (req, res) => {
		res.render("roles/addRole");
	},

	handleAdd: async (req, res) => {
		const { name, permissions } = req.body;
		if (name && permissions) {
			console.log(name, permissions);
			const role = await Role.create({
				name,
			});

			let dataPermission = [];

			if (typeof permissions === "string") {
				dataPermission.push({
					value: permissions,
				});
			} else {
				dataPermission = permissions.map((item) => ({
					value: item,
				}));
			}

			dataPermission.forEach(async (item) => {
				const permissionIntance = await Permission.findOne({
					where: item,
				});

				if (!permissionIntance) {
					await role.createPermission(item);
				} else {
					await role.addPermission(permissionIntance);
				}
			});

			res.redirect("/role");
		} else {
			res.redirect("/role/add");
		}
	},

	edit: async (req, res) => {
		const { id } = req.params;
		const role = await Role.findOne({
			where: {
				id,
			},
			include: {
				model: Permission,
			},
		});

		const roles = await Role.findAll();
		const { Permissions: permissions } = role;
		const permissionUtil = async (data, permission) => {
			const permissionData = data.findOne(({ value }) => value === permission);
			if (permissionData) {
				return permissionData.value;
			}
		};

		res.render("roles/editRole", { role, roles, permissions, permissionUtil });
	},

	handleEdit: async (req, res) => {
		res.send("done");
	},
};
