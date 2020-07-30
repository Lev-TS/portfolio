import React from 'react';

import './blog.styles.scss';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import PageHeader from '../../components/page-header/page-header.component';

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
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			// if user is authenticated and we recieve userAuth object get latest
			// snapshot object on that user and save data that comes with that
			// object into state. Else, currentUser is userAuth object, i.e null.
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				// listen for document changes, e.g. if user data has been updated
				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							// spreading out the snapshot key/value pairs
							...snapShot.data(),
						},
					}, ()=>console.log(this.state));
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}


	render() {
		return (
			<div className="blog">
				<PageHeader title='Blog' currentUser={this.state.currentUser} isBlogPage/>
			</div>
		)
	}
}

export default Blog;
