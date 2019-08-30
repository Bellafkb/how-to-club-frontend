import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'

export default class Notification extends Component {
    render() {
        return (
            <Dropdown style={{ width: '100%' }}>
                <Dropdown.Toggle style={{ width: '100%' }}
                    variant="success" id="dropdown-basic">
                    Notification
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

