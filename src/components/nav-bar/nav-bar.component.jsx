import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './nav-bar.styles.scss';

const NavBar = ({ location, active }) => {
	const hilight = path => `${location.pathname === `${path}` ? 'selected-option' : 'option'}`;
	const transform = {
		transform: `${!active ? 'scale(0)' : 'none'}`,
		position: `${!active ? 'absolute' : 'static'}`,
	};

	return (
		<div className="nav-bar" style={transform}>
			<div className="profile-picture">
				<Link className="outer-box" to="/">
					<div className="inner-box">
						<div className="background-image" />
					</div>
				</Link>
			</div>
			<div className="options">
                <Link className={hilight('/')} to="/">HOME</Link>
				<Link className={hilight('/about')} to="/about">ABOUT</Link>
				<Link className={hilight('/resume')} to="/resume">RESUME</Link>
                <Link className={hilight('/portfolio')} to="/portfolio">PORTFOLIO</Link>
                <Link className={hilight('/blog')} to="/blog">BLOG</Link>
                <Link className={hilight('/contact')} to="/contact">CONTACT</Link>
			</div>
			<div className="footer">
				<p>&copy; Lev-TS / 2020 </p>
			</div>
		</div>
	);
};

export default withRouter(NavBar);

