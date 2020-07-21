const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const contactRouter = express.Router();
app.use(express.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/build')));


// Serve requests for sending messages
app.use(cors());
app.use('/contact', contactRouter);


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

// Handles any requests that don't match the one above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});


const port = process.env.PORT || 3001;
app.listen(port);
