import React from 'react';

import './about.styles.scss';

import ProfileImage from '../../components/profile-image/profile-image.component';
import PageHeader from '../../components/page-header/page-header.component';

const About = () => (
	<div className="about">
		<PageHeader title="about me" />
		<div className="about-outer-container">
			<ProfileImage />
			<p className="long-bio">
				<span className="text-block">
					Having researched the EU Innovation Policy in the role of a
					public policy consultant (my initial career choice), I
					decided that acquiring big data techniques was a natural
					progression for me. I started learning Python and data
					manipulation on DataCamp. However, soon I realised that I
					have a passion for web development. So, I decided to shift
					my career gradually towards the industry.
				</span>

				<span className="text-block">
					I have since been working persistently towards this
					objective. Recently, I finished an online programme on
					Codecademy, which consisted of 16 full-stack courses.
					Currently, I am involved in the online course by Zero to
					Mastery Academy, where I am acquiring technologies for
					building a full-scale e-commerce application. Some of the
					key technologies that I focus there include, but are not
					limited to: HTML5, SASS, JavaScript, React, Redux, Hooks,
					GraphQL, ContextAPI, Stripe, and Firebase.
				</span>
			</p>
		</div>
	</div>
);

export default About;
