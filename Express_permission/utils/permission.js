module.exports = {
	isRole: (roleData, roleId) => {
		return roleData.find((role) => {
			return +role.id === +roleId;
		});
	},
};
