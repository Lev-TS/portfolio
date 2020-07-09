import React from 'react';
import './App.css';

// Router components
import { Switch, Route } from 'react-router-dom';

// Components persisting across all pages
import NavBar from './components/nav-bar/nav-bar.component'

// Page components
import HomePage from './pages/homepage/homepage.component';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
