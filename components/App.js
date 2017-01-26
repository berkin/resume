import React from 'react';
import data from '../data/resume.json';
import '../assets/css/src/main.scss';

const App = () => (
	<div className="main-container pure-g">
		<div className="pure-u-1 main-content">
			<div className="box">
				<figure className="avatar"><img src={data.avatar} alt={data.name} /></figure>
				<h1><strong>{data.name}</strong></h1>
				<h2>{data.title}</h2>
				<ul className="horizontal-list">
					<li className="item-line"><a href="tel:{data.phone}">{data.phone}</a></li>
					<li className="item-line"><a href="email:{data.email}">{data.email}</a></li>
					<li><a href="{data.social.linkedin}">Linked In</a></li>
					<li><a href="{data.social.github}">Github</a></li>
					<li><a href="{data.social.dribbble}">Dribbble</a></li>
				</ul>
				<div className="summary" dangerouslySetInnerHTML={{__html: data.summary}} />
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
			<ul className="general-list">
				{
				data.experiences.map((item, index) =>
					<li key={index}>
						<div className="label">
							<span className="date">{item.begin}</span>
							<span className="date">{item.end}</span>
						</div>
						<div className="content">
							<h2 className="company">{item.company}</h2>
							<h3 className="title">{item.title}</h3>
							<div dangerouslySetInnerHTML={{__html: item.description}} />
						</div>
					</li>
				)
				}
			</ul>
		</div>
	</div>
);

export default App;
