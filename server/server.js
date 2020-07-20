const express = require('express');

const contactRouter = express.Router();
const cors = require('cors');

const nodemailer = require('nodemailer');
const credentials = require('./config');

const provider = {
	service: 'gmail',
	auth: {
		user: credentials.USER,
		pass: credentials.PASS,
	},
};

const transporter = nodemailer.createTransport(provider);

transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Server is ready to take messages');
	}
});

contactRouter.post('/send', (req, res, next) => {
    const { name, email, message } = req.body;
	const content = `name: ${name} \nemail: ${email} \nmessage: ${message} `;

	const mail = {
		from: name,
		to: credentials.USER,
		subject: 'New Message from Portfolio Contact Form',
		text: content,
	};

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.sendStatus(500);
		} else {
			res.sendStatus(200);
		}
	});
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/contact', contactRouter);
app.listen(3002);
