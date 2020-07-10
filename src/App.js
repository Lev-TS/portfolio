import React from 'react';
import './App.css';

// Router components
import { Switch, Route } from 'react-router-dom';

// Components persisting across all pages
import NavBarToggler from './components/nav-bar-toggler/nav-bar-toggler.component';

// Page components
import HomePage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import Resume from './pages/resume/resume.component';
import Portfolio from './pages/portfolio/portfolio.component';
import Blog from './pages/blog/blog.component';
import Contact from './pages/contact/contact.component';

function App() {
	return (
		<div className="App">
			<NavBarToggler />
			<div className='body'>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/about" component={About} />
					<Route exact path="/resume" component={Resume} />
					<Route exact path="/portfolio" component={Portfolio} />
					<Route exact path="/blog" component={Blog} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
