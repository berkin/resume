import React from 'react';
import data from '../data/resume';

class Profile extends React.Component {
	render() {
		return (
			<div>
				<div>Name: {data.name}</div>
				<div>Title: {data.title}</div>
				<div><img src={data.avatar} alt={data.name} /></div>
				<div>email: {data.email}</div>
				<div>phone: {data.phone}l</div>
			</div>);
	}
}

export default Profile;
