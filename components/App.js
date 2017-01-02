import React from 'react';
import data from '../data/resume.json';


const App = () => (
	<div>
		<h1>Profile</h1>
		<div>Name: {data.name}</div>
		<div>Title: {data.title}</div>
		<div><img src={data.avatar} alt={data.name} /></div>
		<div>email: {data.email}</div>
		<div>phone: {data.phone}l</div>

		<h1>Education</h1>
		<ul>
			{
			data.education.map((item, index) =>
				<li key={index}>{item.school} - {item.faculty}</li>
			)
			}
		</ul>

		<h1>Experiences</h1>
		<ul>
			{
			data.experiences.map((item, index) =>
				<li key={index}>{item.begin} - {item.end} {item.company} {item.title} {item.description}</li>
			)
			}
		</ul>
	</div>
);

export default App;
