import React from 'react';
import Profile from './Profile';
import EducationList from './EducationList';
import ExperienceList from './ExperienceList';

class App extends React.Component {
	render() {
		return (
			<div>
				<Profile />
				<EducationList />
				<ExperienceList />
			</div>);
	}
}

export default App;
