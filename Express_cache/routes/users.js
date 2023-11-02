var express = require("express");
var router = express.Router();

const cookie = require("cookie");

const users = require("../data");

router.get("/:id", function (req, res, next) {
	const { id } = req.params;
	if (req.headers.cookie) {
		const cookies = cookie.parse(req.headers.cookie);
		const userData = cookies.userData;

		if (userData) {
			const user = JSON.parse(userData);

			if (user.id === id) {
				return res.json(user);
			}
		}
	}

	const user = users.find((user) => user.id === +id);

	if (user) {
		const userData = JSON.stringify(user);

		const cookieValue = cookie.serialize("userData", userData, {
			maxAge: 3600000,
			httpOnly: true,
			path: "/",
		});

		res.setHeader("Set-Cookie", cookieValue);

		res.json(user);
	} else {
		res.status(404).send("User not found");
	}
});

module.exports = router;
