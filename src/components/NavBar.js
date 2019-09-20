import React, { Component } from 'react';
import { Navbar, Col, Row, Container } from 'react-bootstrap';
import AppForm from './AppForm';
import NavProfile from './NavProfile';
import Notification from './Notification';

class NavBar extends Component {
    render() {
        return (
            <Navbar
                variant="dark"
                style={{
                    margin:0,
                    background: '#6441a4',
                    width: '100%',
                    height: '60px',
                }}>
                <Container style={{width: '50%',margin: 'auto'}} >
                    <Row style={{width:'100%', padding: 0}}>
                        <Col sm={2} style={{padding:'auto'}}>
                            <Navbar.Brand href="/">
                                <strong>Klubby</strong>
                            </Navbar.Brand>
                        </Col>
                        <Col sm={8} style={{padding:'0'}}>
                            <AppForm handleLoading={this.props.handleLoading} ></AppForm>
                        </Col>
                        <Col sm={1} style={{padding:0}}>
                            <Notification ></Notification>
                        </Col>
                        <Col sm={1} style={{padding:0}}>
                            <NavProfile handleShow={this.props.handleShow}></NavProfile>
                        </Col>
                    </Row>

                </Container>


            </Navbar>
        );
    }
}

export default NavBar;
