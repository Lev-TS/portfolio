import React from 'react';

import './blog.styles.scss';

import { auth } from '../../firebase/firebase.utils';
import PageHeader from '../../components/page-header/page-header.component'
import SignIn from '../../components/sign-in/sign-in.component'

class Blog extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}
	
	// handling authentication
	unsubscribeFromAuth=null
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
			console.log(user)
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}


	render() {
		return (
			<div className="blog">
				<PageHeader title='Blog' currentUser={this.state.currentUser} isBlogPage/>
				<SignIn />
			</div>
		)
	}
}

export default Blog;
