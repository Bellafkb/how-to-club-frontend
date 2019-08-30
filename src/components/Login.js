import React, { Component } from 'react'
import { Button, Modal } from "react-bootstrap";

export default class Login extends Component {
    render() {
        return (
            <div>
                <Modal size='sm'
                show={this.props.showLogin}
                    onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{textAlign: 'center'}}>
                        <Button 
                        variant="primary">
                            Instagram login
                        </Button>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
