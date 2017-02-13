import React from 'react';
import marked from 'marked';
import data from '../data/resume.hjson';
import Isvg from 'react-inlinesvg';
import '../assets/css/src/main.scss';


const App = () => (
	<div className="main-container pure-g">
		<div className="pure-u-1 main-content">
			<div className="box">
				<figure className="avatar"><img src={data.avatar} alt={data.name} /></figure>
				<h1 className="header"><strong>{data.name}</strong></h1>
				<h2 className="sub-header">{data.title}</h2>
				<ul className="horizontal-list">
					<li className="item-line">
						<a href={`tel: ${data.phone}`}>
							<Isvg src="assets/img/social/phone-square.svg" />
							<span className="text">{data.phone}</span>
						</a>
					</li>
					<li className="item-line">
						<a href={`email: ${data.email}`}>
							<Isvg src="assets/img/social/envelope-square.svg" />
							<span className="text">{data.email}</span>
						</a>
					</li>
					<li>
						<a href={data.social.linkedin}>
							<Isvg src="assets/img/social/linkedin-square.svg" />
							<span className="text">Linked In</span>
						</a>
					</li>
					<li>
						<a href={data.social.github}>
							<Isvg src="assets/img/social/github-square.svg" />
							<span className="text">Github</span>
						</a>
					</li>
				</ul>
				<div className="summary" dangerouslySetInnerHTML={{ __html: marked(data.summary) }} />
			</div>
			<h1>Education</h1>
			<ul className="general-list">
				{
				data.education.map((item, index) =>
					<li key={index}>
						<div className="label"><span className="date">{item.end}</span></div>
						<div className="content">
							<h2 className="title">{item.school}</h2>
							{item.faculty}
						</div>
					</li>
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
							<div dangerouslySetInnerHTML={{ __html: marked(item.description) }} />
						</div>
					</li>
				)
				}
			</ul>

			<h1>Conferences</h1>
			<ul className="general-list">
				{
				data.conferences.map((item, index) =>
					<li key={index}>
						<div className="label"><span className="date">{item.date}</span></div>
						<div className="content">
							<h2 className="company">{item.title}</h2>
							<h3 className="title">{item.location}</h3>
						</div>
					</li>
				)
				}
			</ul>
		</div>
	</div>
);

export default App;
