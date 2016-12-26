import React from 'react';
import Education from './Education';
import Profile from './Profile';
import Experiences from './Experiences';

class App extends React.Component {
	render() {
		return (
			<div>
				<Profile />
				<Education />
				<Experiences />
			</div>);
	}
}

export default App;
