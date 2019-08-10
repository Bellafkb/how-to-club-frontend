import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark"
                style={{
                    position: 'fixed',
                    top: 0,
                    width: '100%'
                }}>
                <Navbar.Brand href="/">Klubby</Navbar.Brand>
            </Navbar>
        );
    }
}

export default NavBar;
