import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavProfile extends Component {
    render() {
        return (
            <Dropdown style={{ width: '100%' }}>
                <Dropdown.Toggle style={{ width: '100%' }}
                    variant="success"
                    id="dropdown-basic">
                    User
            </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Link style={{ textDecoration: 'none' }}
                        to="/profile">
                        <Dropdown.Item>Profile</Dropdown.Item>
                    </Link>
                    <Dropdown.Item onClick={this.props.handleShow}>Login</Dropdown.Item>
                    <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
