import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import AppForm from './AppForm';
import NavProfile from './NavProfile';

class NavBar extends Component {
    render() {
        return (
            <Navbar
                variant="dark"
                style={{
                    position: 'fixed',
                    top: 0,
                    background: '#6441a4',
                    width: '100%',
                    height: '60px'
                }}>
                <Navbar.Brand href="/">Klubby</Navbar.Brand>
                <AppForm></AppForm>
                <NavProfile></NavProfile>
            </Navbar>
        );
    }
}

export default NavBar;
