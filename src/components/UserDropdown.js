import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default class UserDropdown extends Component {
    render() {
        return (
            <div>
                <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
            </div>
        )
    }
}
