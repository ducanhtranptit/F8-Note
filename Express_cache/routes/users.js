var express = require("express");
var router = express.Router();

const cookie = require("cookie");
const Cache = require("file-system-cache").default;

const users = require("../data");

const cache = Cache({
	basePath: "./.cache",
	ns: "f8",
	hash: "sha1",
	ttl: 86400,
});

router.get("/", async function (req, res, next) {
	const products = ["item 1", "item 2", "item 3"];

	let data = await cache.get("products");

	if (!data) {
		cache.setSync("products", products, 2);
		data = products;
		console.log("DB");
	} else {
		console.log("cache");
	}

	console.log(data);
	res.send("ok");
});

module.exports = router;
