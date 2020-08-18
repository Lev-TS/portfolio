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
					public policy consultant, I decided that acquiring big data
					techniques was a natural progression for me. I started
					learning Data Science on DataCamp. However, soon I realised
					that I have a larger passion for Web Development. So, I
					decided to move gradually towards this industry.
				</span>

				<span className="text-block">
					I have since been working persistently towards this
					objective. Recently, I have finished an online web
					development programme on Codecademy, which consisted of 16
					full-stack courses. Currently, I am enrolled in an online
					learning programme, where I am acquiring skills for building
					a full-scale e-commerce application. Some of the key
					technologies that I focus include, but are not limited to:
					SASS, React, Redux, Hooks, GraphQL, ContextAPI, Stripe, and
					Firebase.
				</span>
			</p>
		</div>
	</div>
);

export default About;
