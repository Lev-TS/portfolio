import React from 'react';

import './nav-bar-toggler.styles.scss';

const NavBarToggler = ({ active, handleOpenMenu, handleCloseMenu}) => {
	return (
		<div className="nav-bar-toggler">
			<button
				className="open-menu"
				onClick={handleOpenMenu}
				style={{ display: `${active ? 'none' : 'inline-block'}` }}
			></button>
			<button
				className="close-menu"
				onClick={handleCloseMenu}
				style={{ display: `${!active ? 'none' : 'inline-block'}` }}
			></button>
		</div>
	);
};

export default NavBarToggler;
