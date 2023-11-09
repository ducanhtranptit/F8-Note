const kue = require("kue");
const queue = kue.createQueue();

const SendMail = require("../jobs/SendMail");

class UserController {
	async handleSendMail(req, res) {
		const { email, name } = req.body;
		const data = {
			name: name,
			email: email,
		};

		const job = queue
			.create("sendEmail", data)
			.delay(10000)
			.save((err) => {
				if (!err)
					console.log(`Đã thêm công việc gửi email cho ${data.email} vào hàng đợi.`);
			});

		queue.process("sendEmail", (job, done) => {
			const { email, name } = job.data;
			SendMail.handle(email, name);
			console.log(`Đã gửi email tới ${email}`);
			done();
		});

		res.json({
			message: "done",
		});
	}
}

module.exports = new UserController();
