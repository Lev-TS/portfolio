import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './nav-bar-options.styles.scss';
import DATA from './nav-bar-options.data';

class NavBarOptions extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pages: DATA,
		};
	}

	render() {
		const highlight = (path) =>`${this.props.location.pathname === `${path}` ? 'selected-option' : 'option'}`;

		return (
			<div className="options">
				{this.state.pages.map((page) => (
					<Link
						key={page.id}
						className={highlight(`${page.path}`)}
                        to={page.path}
						style={{textTransform: 'uppercase'}}

                    >
                        {page.title}
                    </Link>
				))}
			</div>
		);
	}
}

export default withRouter(NavBarOptions);
