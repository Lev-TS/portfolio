const express = require('express');
const contactRouter = express.Router();

const nodemailer = require('nodemailer');
const smtpTransport = require('./smtpTransport');


const transporter = nodemailer.createTransport(smtpTransport);

transporter.verify((error, success) => {
    error ? console.log(error) : console.log('Server is ready to take messages');
});

contactRouter.post('/send', (req, res, next) => {
    const { name, email, message } = req.body;
	const content = `name: ${name} \nemail: ${email} \nmessage: ${message} `;

	const mail = {
		from: 'levantsu@gmail.com',
		to: 'levantsu@gmail.com',
		subject: 'New Message from Portfolio Contact Form',
		text: content,
	};

	transporter.sendMail(mail, (error, response) => {
        error ? res.sendStatus(500) : res.sendStatus(200);
        smtpTransport.close();
	});
});

module.exports = contactRouter;