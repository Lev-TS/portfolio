import React from 'react';

import './about.styles.scss';

import ProfileImage from '../../components/profile-image/profile-image.component';
import PageHeader from '../../components/page-header/page-header.component'

const About = () => (
	<div className="about">
		<PageHeader title='about me'/>
		<div className="about-outer-container">
			<ProfileImage />
			<div className="about-inner-container">
				<p className="long-bio">
					My initial career choice was a public policy consultancy.
					Having researched the EU Innovation Policy in this role, I
					decided that acquiring big data techniques was a natural
					progression for my career. I started learning Python and
					data manipulation on DataCamp. However, once I immersed into
					the coding industry, I realised that I have a passion for
					web development. So, I set myself an objective to acquire
					skills and gradually shift my career towards the industry.
					<br />
					<br />I have since been working persistently towards this
					objective. Recently, I finished an online programme on
					Codecademy, which consisted of 16 full-stack courses.
					Currently, I am involved in the online course by Zero to
					Mastery Academy, where I am acquiring technologies for
					building a full-scale e-commerce application. Some of the
					key technologies that I currently focus include but are not
					limited to HTML5, SASS, JavaScript, React, Redux, Hooks,
					GraphQL, ContextAPI, Stripe, Firebase, etc.
				</p>
				<a
					href="https://www.linkedin.com/in/tsutskiridze/"
					rel="noopener noreferrer"
					target="_blank"
				>
					Resume
				</a>
			</div>
		</div>
	</div>
);

export default About;
