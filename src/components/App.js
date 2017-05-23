import React from 'react';
import marked from 'marked';
import data from '../../data/resume.hjson';
import '../assets/css/main.scss';
import PhoneIcon from '../assets/img/social/phone-square.svg';
import EnvelopeIcon from '../assets/img/social/envelope-square.svg';
import LinkedinIcon from '../assets/img/social/linkedin-square.svg';
import GithubIcon from '../assets/img/social/github-square.svg';
import PdfIcon from '../assets/img/file-pdf-o.svg';
import PrintIcon from '../assets/img/print.svg';
import Contact from './Contact';

const App = () => (
	<div className="main-container">
		<Contact />
		<div className="main-content">
			<ul className="horizontal-list download-links">
				<li>
					<a href="resume.pdf">
						<span className="isvg">
							<PdfIcon />
						</span>
						<span className="text">Download as pdf</span>
					</a>
				</li>
				<li>
					<a href="javascript:window.print();">
						<span className="isvg">
							<PrintIcon />
						</span>
						<span className="text">Print</span>
					</a>
				</li>
			</ul>
			<div className="box">
				<figure className="avatar"><img src={require(`../assets/img/${data.avatar}`)} alt={data.name} /></figure>
				<h1 className="header"><strong>{data.name}</strong></h1>
				<h2 className="sub-header">{data.title}</h2>
				<ul className="horizontal-list">
					<li className="item-line">
						<a href={`tel: ${data.phone}`}>
							<span className="isvg">
								<PhoneIcon />
							</span>
							<span className="text">{data.phone}</span>
						</a>
					</li>
					<li className="item-line">
						<a href={`email: ${data.email}`}>
							<span className="isvg">
								<EnvelopeIcon />
							</span>
							<span className="text">{data.email}</span>
						</a>
					</li>
					<li>
						<a href={data.social.linkedin}>
							<span className="isvg">
								<LinkedinIcon />
							</span>
							<span className="text">Linked In</span>
						</a>
					</li>
					<li>
						<a href={data.social.github}>
							<span className="isvg">
								<GithubIcon />
							</span>
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
						<div className="label">
							<div className="dates">
								<span className="date">{item.end}</span>
							</div>
							<h2 className="title">{item.school}</h2>
							<h3 className="content-text">{item.faculty}</h3>
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
							<div className="dates">
								<span className="date">{item.begin}</span>
								<span className="date">{item.end}</span>
							</div>
							<h2 className="company">{item.company}</h2>
							<h3 className="title">{item.title}</h3>
						</div>
						<div className="content">
							<div dangerouslySetInnerHTML={{ __html: marked(item.description) }} />
						</div>
					</li>
				)
				}
			</ul>
			<h1>Languages</h1>
			<div className="description">
				{ data.languages.join(', ') }
			</div>
			<h1>Attended Conferences</h1>
			<ul className="general-list">
				{
				data.conferences.map((item, index) =>
					<li key={index}>
						<div className="label">
							<div className="dates">
								<span className="date">{item.date}</span>
							</div>
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
