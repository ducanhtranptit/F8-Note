const nodemailer = require("nodemailer");
class SendMail {
	handle = async (email, name) => {
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: "hoangan@fullstack.edu.vn",
				pass: "xawy cdle xyzo cyio",
			},
		});
		const info = await transporter.sendMail({
			from: `Hoàng An F8 <hoangan@fullstack.edu.vn>`, // sender address
			to: email, // list of receivers
			subject: `Xin chào: ${name}`, // Subject line
			html: `Xin chào bạn ${name}, tôi đang test email`,
		});
	};
}

module.exports = new SendMail();
