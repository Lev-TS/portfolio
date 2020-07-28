import React from 'react';
import { Link } from 'react-router-dom';

import './page-header.styles.scss';
import { auth } from '../../firebase/firebase.utils';

const PageHeader = ({ title, currentUser, isBlogPage }) => (
	<div className="page-header">
        
        <h1>{title}</h1>
		<a
			className="github"
			href="https://github.com/Lev-TS"
			rel="noopener noreferrer"
			target="_blank"
        >
        </a>
		<a
			className="linkedin"
			href="https://www.linkedin.com/in/tsutskiridze/"
			rel="noopener noreferrer"
			target="_blank"
        >
        </a>
		<a
			className="twitter"
			href="https://twitter.com/LevTS"
			rel="noopener noreferrer"
			target="_blank"
        >
		</a>
		<div style={{display: `${isBlogPage ? 'block' : 'none'}`}}>
			{currentUser ? (
				<button className="sign-out-button" onClick={() => auth.signOut()}>
					SIGN OUT
				</button>
			) : (
				<Link className="sign-in-button" to="/blog/signin">
					SIGN IN
				</Link>
			)}
		</div>
	</div>
);

export default PageHeader;