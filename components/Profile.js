import React from 'react';
import data from '../data/resume';

class Profile extends React.Component {
	render() {
		return (
			<div>
				<div>Name: {data.name}</div>
				<div>Title: {data.title}</div>
			</div>);
	}
}

export default Profile;
