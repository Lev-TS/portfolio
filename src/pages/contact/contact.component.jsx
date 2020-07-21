import React from 'react';

import './contact.styles.scss';

import ContactForm from '../../components/contact-form/contact-form.component';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
		};
	}

	onNameChange = (event) => {
		this.setState({ name: event.target.value });
	};

	onEmailChange = (event) => {
		this.setState({ email: event.target.value });
	};

	onMessageChange = (event) => {
		this.setState({ message: event.target.value });
	};

	resetState = () => {
		this.setState({ name: '', email: '', message: '' });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		fetch('/api/contact/send', {
			method: 'POST',
			body: JSON.stringify(this.state),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}).then((response) => {
			console.log(response.status);
			if (response.status === 200) {
				alert('Message Sent.');
				this.resetState();
			} else if (response.status === 500) {
				alert(
					'Message failed to send. Please try again later or write me directly at levantsu@gmail.com'
				);
			}
		});
	};

	render() {
		return (
			<div className="contact">
				<h1>Contact</h1>
				<p>Would you like to work with me? <br></br> Awesome, lets talk!</p>
				
				
				<ContactForm
					name={this.state.name}
					email={this.state.email}
					message={this.state.message}
					onNameChange={this.onNameChange}
					onEmailChange={this.onEmailChange}
					onMessageChange={this.onMessageChange}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

export default Contact;
