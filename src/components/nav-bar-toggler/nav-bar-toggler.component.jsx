import React from 'react';

import './nav-bar-toggler.styles.scss';

import NavBar from '../nav-bar/nav-bar.component'

class NavBarToggler extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        }
    }

    handleOpenMenu = (event) => {
        this.setState({ active: true})
    }

    handleCloseMenu = (event) => {
        this.setState({ active: false})
    }

    render() {
        const {active} = this.state;

        return (    
            <div className='nav-bar-toggler'>
                <button className='open-menu' onClick={this.handleOpenMenu} style={{display: `${active ? 'none' : 'block'}`}}></button>
                <button className='close-menu' onClick={this.handleCloseMenu} style={{display: `${!active ? 'none' : 'block'}`}}></button>
                <NavBar active={active} />
            </div>
        )
    }
}

export default NavBarToggler;