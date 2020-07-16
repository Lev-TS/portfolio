import React from 'react';
import './App.css';

// Router components
import { Switch, Route } from 'react-router-dom';

// Components persisting across all pages
import NavBarToggler from './components/nav-bar-toggler/nav-bar-toggler.component';
import NavBar from './components/nav-bar/nav-bar.component';

// Page components
import HomePage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import Portfolio from './pages/portfolio/portfolio.component';
import Blog from './pages/blog/blog.component';
import Contact from './pages/contact/contact.component';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false,
			BodyStyle: {},
		};
	}

	handleOpenMenu = (event) => {
		this.setState({ active: true });
		window.innerWidth <= 1024 &&
			this.setState({
				BodyStyle: { backgroundColor: 'black', opacity: '0.1'},
			});
	};

	handleCloseMenu = (event) => {
		this.setState({ active: false });
		window.innerWidth <= 1024 &&
			this.setState({ BodyStyle: { opacity: '1' } });
	};

	onLearnMore = (event) => {
		window.innerWidth > 1024 && this.setState({ active: true });
		window.innerWidth <= 1024 && this.setState({ active: false });
	};

	// Update inactive body style on window resize
	updateInactiveBodyStyle() {
		if (this.state.active && window.innerWidth <= 1024) {
			this.setState({
				BodyStyle: { backgroundColor: 'black', opacity: '0.1' },
			});
		} else {
			this.setState({ BodyStyle: { opacity: '1' } });
		}
	}

	// Add event listener for updateInactiveBodyStyle
	componentDidMount() {
		this.updateInactiveBodyStyle();
		window.addEventListener(
			'resize',
			this.updateInactiveBodyStyle.bind(this)
		);
	}

	// Remove event listener for updateInactiveBodyStyle
	componentWillUnmount() {
		window.removeEventListener(
			'resize',
			this.updateInactiveBodyStyle.bind(this)
		);
	}

	render() {
		const { active, BodyStyle } = this.state;

		return (
			<div className="App">
				<NavBarToggler
					handleOpenMenu={this.handleOpenMenu}
					handleCloseMenu={this.handleCloseMenu}
					active={active}
				/>
				<NavBar active={active} />
				<div className="body" style={BodyStyle}>
					<div className="fixed-header"/>
					<Switch>
						<Route
							exact
							path="/"
							render={(props) => (
								<HomePage
									{...props}
									onLearnMore={this.onLearnMore}
								/>
							)}
						/>
						<Route path="/about" component={About} />
						<Route path="/portfolio" component={Portfolio} />
						<Route path="/blog" component={Blog} />
						<Route path="/contact" component={Contact} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
