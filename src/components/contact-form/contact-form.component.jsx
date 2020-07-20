import React from 'react';

import './contact-form.styles.scss';

const ContactForm = (props) => (
	<div className="contact-form">
		<form onSubmit={props.handleSubmit} method="POST">
			<div className="group">
				
				<input
					type="text"
					value={props.name}
					onChange={props.onNameChange}
					className="form-input"
				/>
				<label className={`${props.name.length ? 'shrink' : ''} form-input-label`}>Name</label>

			</div>
			<div className="group">
				
				<input
					type="email"
					value={props.email}
					onChange={props.onEmailChange}
					className="form-input"
				/>
				<label className={`${props.email.length ? 'shrink' : ''} form-input-label`}>Email</label>
			</div>
			<div className="group">
				
				<textarea
					rows="5"
					value={props.message}
					onChange={props.onMessageChange}
					className="form-input"
				/>
				<label className={`${props.message.length ? 'shrink' : ''} form-input-label`}>Message</label>
			</div>
			<button type="submit">Submit</button>
		</form>
	</div>
);

export default ContactForm;
