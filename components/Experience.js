import React from 'react';
import data from '../data/resume';

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

export default Experience;
