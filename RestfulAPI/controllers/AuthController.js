const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const model = require("../models/index");
const User = model.User;
const { JWT_SECRET, JWT_EXPIRE } = process.env;

module.exports = {
	login: async (req, res) => {
		const { email, password } = req.body;
		const user = await User.findOne({
			where: {
				email,
			},
		});
		if (!user) {
			res.status(400).json({
				status: "error",
				message: "Authentication Failed",
			});
			return;
		}

		const { password: hash } = user;
		const status = bcrypt.compareSync(password, hash);
		if (!status) {
			res.status(400).json({
				status: "error",
				message: "Authentication Failed",
			});
			return;
		}
		const token = jwt.sign(
			{
				data: {
					userId: user.id,
				},
			},
			JWT_SECRET,
			{ expiresIn: JWT_EXPIRE * 60 }
		);
		res.json({
			status: "success",
			accessToken: token,
		});
	},

	profile: async (req, res) => {
		const author = req.headers["authorization"];
		const token = author.replace("Bearer", "").trim();
		const decoded = jwt.verify(token, JWT_SECRET);
		res.json({
			decoded,
		});
	},
};
