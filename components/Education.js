import React from 'react';

class Education extends React.Component {
	render() {
		return (
			<div>
				{this.props.education.school}
				{this.props.education.faculty}
			</div>);
	}
}

Education.propTypes = {
	education: React.PropTypes.object
};
export default Education;
