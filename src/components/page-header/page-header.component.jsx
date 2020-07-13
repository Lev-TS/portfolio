import React from 'react';

import './page-header.styles.scss';

const PageHeader = ({ title }) => (
	<div className="page-header">
        <div className="fixed-head"/>
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
	</div>
);

export default PageHeader;