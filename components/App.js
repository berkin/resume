import React from 'react';
import data from '../data/resume.json';
import '../assets/css/src/main.scss';

const App = () => (
	<div className="container pure-g">
		<div className="pure-u-1 content">
			<div className="box">
				<figure className="avatar"><img src={data.avatar} alt={data.name} /></figure>
				<h1>{data.name}</h1>
				<h2>{data.title}</h2>
				<div>
					<a href="tel:{data.phone}">{data.phone}</a>
					<a href="{data.social.github}">Github</a>
				</div>
			</div>
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
	</div>
);

export default App;
