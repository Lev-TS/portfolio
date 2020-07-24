import React from 'react';

import './nav-bar.styles.scss';

import NavBarLogo from '../nav-bar-logo/nav-bar-logo.component';
import NavBarOptions from '../nav-bar-options/nav-bar-options.component';
import NavBarFooter from '../nav-bar-footer/nav-bar-footer.component';

const NavBar = ({ active,  handleCloseMenu}) => {
	const transform = {
		transform: `${!active ? 'translate(-300px)' : 'none'}`,
		position: `${!active ? 'absolute' : 'static'}`,
	};

	return (
		<div className="nav-bar" style={transform}>
			<NavBarLogo active = {active} />
			<NavBarOptions closeMenu={handleCloseMenu}/>
			<NavBarFooter />
		</div>
	);
};

export default NavBar;
