import React from 'react';
import { Link } from 'react-router-dom';

import './nav-bar-image.styles.scss';

const NavBarImage = () => (
	<div className="profile-picture">
		<Link className="outer-box" to="/">
			<div className="inner-box">
				<div className="background-image" />
			</div>
		</Link>
	</div>
);

export default NavBarImage;
