import React from 'react';

import './homepage.styles.scss';

const HomePage = ({ history, onLearnMore }) => {
	const handleLearnMore = () => {
		history.push('./about');
		onLearnMore();
	}


	return (
		<div className="homepage">
			<h1>
				Hi, I am <span className="my-name">Levan</span>
			</h1>
			<p>
				I am a frontend web developer. I create responsive & interactive
				web applications by writing a clean & scalable code.
			</p>
			<button className="learn-more" onClick={handleLearnMore}>Learn More</button>
		</div>
	);
};

export default HomePage;