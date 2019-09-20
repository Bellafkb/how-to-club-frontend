import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Cookies from "js-cookie";


export default class NavProfile extends Component {
    componentWillMount() {

    }
    async handleLogout() {
        try {
            await Cookies.remove('jwtToken');
            window.location = '/';
        } catch (error) {

        }
    }

    loginLogout() {

    }
    render() {
        let login = Cookies.get('jwtToken') === undefined;
        return (
            <Dropdown style={{ width: '100%' }} >
                <Dropdown.Toggle style={{
                    verticalAlign: 'middle',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                }}
                    variant="primary"
                    id="dropdown-basic"
                    src={'https://www.w3schools.com/howto/img_avatar.png'}>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ width: '40px' }}>
                    <Dropdown.Item><Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>Profile</Link></Dropdown.Item>
                    <div>
                        {login ? <Dropdown.Item onClick={this.props.handleShow}>Login</Dropdown.Item> :
                            <Dropdown.Item onClick={() => this.handleLogout()}>Logout</Dropdown.Item>
                        }
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
