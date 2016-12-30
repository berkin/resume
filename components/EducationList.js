import React from 'react';
import Education from './Education';
import data from '../data/resume.json';

class EducationList extends React.Component {
	render() {
		const educations = [];
		data.education.forEach((education, index) => {
			educations.push(<Education key={index} education={education} />);
		});
		return (
			<div>
				{educations}
			</div>);
	}
}

export default EducationList;
