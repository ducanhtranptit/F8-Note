const SendMail = require("../jobs/SendMail");
const Event = require("../core/Event");
module.exports = {
	handleLogin: async (req, res) => {
		const { email, name } = req.body;
		//Dispatch Queue
		const event = new Event();
		event.dispatch(
			new SendMail({
				name,
				email,
			})
		);

		res.json({
			status: "done",
		});
	},
};
