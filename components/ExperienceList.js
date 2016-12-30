import React from 'react';
import Experience from './Experience';
import data from '../data/resume.json';

class ExperienceList extends React.Component {
	render() {
		const experiences = [];
		data.experiences.forEach((experience, index) => {
			experiences.push(<Experience key={index} experience={experience} />);
		});
		return (
			<div>
				{experiences}
			</div>);
	}
}

export default ExperienceList;
