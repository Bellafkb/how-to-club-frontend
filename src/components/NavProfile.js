import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'

export default class NavProfile extends Component {
    render() {
        return (
            <Dropdown style={{margin:'1em'}}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                User
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Profile</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        )
    }
}
