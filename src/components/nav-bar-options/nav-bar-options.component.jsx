import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './nav-bar-options.styles.scss';

const NavBarOptions = ({ location }) => {
    const highlight = path => `${location.pathname === `${path}` ? 'selected-option' : 'option'}`;
    
    return (
        <div className="options">
            <Link className={highlight('/')} to="/">HOME</Link>
			<Link className={highlight('/about')} to="/about">ABOUT</Link>
			<Link className={highlight('/resume')} to="/resume">RESUME</Link>
            <Link className={highlight('/portfolio')} to="/portfolio">PORTFOLIO</Link>
            <Link className={highlight('/blog')} to="/blog">BLOG</Link>
            <Link className={highlight('/contact')} to="/contact">CONTACT</Link>
		</div>
    )
}

export default withRouter(NavBarOptions);