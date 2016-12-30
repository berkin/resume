import React from 'react';

class Experience extends React.Component {
	render() {
		return (
			<div>
				{this.props.experience.begin}-{this.props.experience.end} {this.props.experience.company}
				<div>{this.props.experience.title}</div>
				<div>{this.props.experience.description}</div>
			</div>);
	}
}

Experience.propTypes = {
	experience: React.PropTypes.object
};

export default Experience;
