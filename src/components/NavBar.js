import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <Navbar
                variant="dark"
                style={{
                    position: 'fixed',
                    top: 0,
                    background: '#6c757d',
                    width: '100%',
                    margin: 'auto'
                }}>
                <Navbar.Brand href="/">Klubby</Navbar.Brand>
            </Navbar>
        );
    }
}

export default NavBar;
