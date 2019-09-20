import React, { Component } from 'react'

export default class NavBarResponsive extends Component {
    render() {
        return (
            <header>
                <nav style={{ display: 'flex', height: '56px', backgroundColor: 'purple' }}>
                    <div>
                    </div>
                    <div>
                        <a href='/'>Klubby</a>
                    </div>
                    <div style={{flex: 1, margin: 'auto'}}>
                    </div>
                    <div>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex'
                        }}>
                            <li>
                                notification
                            </li>
                            <li>
                                profile
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
