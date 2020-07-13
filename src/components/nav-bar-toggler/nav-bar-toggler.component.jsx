import React from 'react';

import './nav-bar-toggler.styles.scss';

const NavBarToggler = ({ active, handleOpenMenu, handleCloseMenu}) => {
	return (
		<div className="nav-bar-toggler">
			<button
				className="open-menu"
				onClick={handleOpenMenu}
			></button>
			<button
				className="close-menu"
				onClick={handleCloseMenu}
				style={{ transform: `${!active ? 'translate(-300px)' : 'none'}` }}
			></button>
		</div>
	);
};

export default NavBarToggler;
