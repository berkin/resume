import React, { Component } from 'react';

class Contact extends Component {
	render() {
		return (<div>
			<form>
				<div className="form-row">
					<label htmlFor="fullname" />
					<input type="text" id="fullname" name="fullname" />
				</div>
				<div className="form-row">
					<label htmlFor="email" />
					<input type="email" id="email" name="email" />
				</div>
				<div className="form-row">
					<label htmlFor="message" />
					<textarea id="message" />
				</div>
				<div className="form-row">
					<button>Send</button>
				</div>
			</form>
		</div>);
	}
}

export default Contact;
