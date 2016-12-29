import React from 'react';
import Education from './Education';
import Profile from './Profile';
import ExperienceList from './ExperienceList';

class App extends React.Component {
	render() {
		return (
			<div>
				<Profile />
				<Education />
				<ExperienceList />
			</div>);
	}
}

export default App;
