import React from 'react';

import './nav-bar-logo.styles.scss';

const NavBarLogo = ({ active }) => (
	<div className="outer-container">
		<div className="outer-top-box" to="/" />
		<div className="outer-middle-box" />
		<div className="outer-bottom-box" />
		<dic className="outer-border"/>
		<div className="inner-container" style={{transform: `${active ? 'rotate(238.1deg)' : 'none'}`}}>
			<div className="inner-border"/>
			<div className="inner-top-box" />
			<div className="inner-middle-box" />
			<div className="inner-bottom-box" />
			<div className="center" />
		</div>
	</div>
);

export default NavBarLogo;
