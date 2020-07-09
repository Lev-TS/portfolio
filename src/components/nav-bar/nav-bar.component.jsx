import React from 'react';
import { Link } from 'react-router-dom';

import './nav-bar.styles.scss';
import ProfilePicture from './profile-picture.jpg'

const NavBar = () => (
	<div className="nav-bar">
        <div className="profile-picture">
            <Link className="profile-picture-container" to='/'>
                <img src={ProfilePicture} alt="Dev on a scooter" width='180px' height='180px' />
            </Link>
        </div>
		<div className="options">
            <Link className="option" to='/'>HOME</Link>
            <Link className="option" to='/about'>ABOUT</Link>
            <Link className="option" to='/portfolio'>PORTFOLIO</Link>
            <Link className="option" to='/blog'>BLOG</Link>
            <Link className="option" to='/contact'>CONTACT</Link>
        </div>
		<div className="footer">
			<p>&copy; 2020 Lev-TS</p>
		</div>
	</div>
);

export default NavBar;
