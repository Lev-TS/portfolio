import React from 'react';

import './profile-image.styles.scss';

const ProfileImage = () => (
	<div className="profile-image">
		<a
			className="outer-box"
			href="https://www.linkedin.com/in/tsutskiridze/"
			rel="noopener noreferrer"
			target="_blank"
		>
			<div className="inner-box">
				<div className="background-image" />
			</div>
		</a>
	</div>
);

export default ProfileImage;
