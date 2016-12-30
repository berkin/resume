import React from 'react';
import Experience from './Experience';
import data from '../data/resume';

class ExperienceList extends React.Component {
	render() {
		const experiences = [];
		data.experiences.forEach((experience) => {
			experiences.push(<Experience experience={experience} />);
		});
		return (
			<div>
				{experiences}
			</div>);
	}
}

export default ExperienceList;
