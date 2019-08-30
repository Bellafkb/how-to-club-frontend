import React, { Component } from 'react'
import axios from 'axios'

export default class EventView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            event: ''
        }
    }
    async componentWillMount() {
        try {
            let event = axios.get(`http://localhost:4000/event/${this.props.match.params.id}`)
            console.log(event)
            this.setState({ event: event })
        } catch (error) {

        }
    }
    render() {
        return (
            <div>
                <h1>
                    {this.props.match.params.id}
                </h1>
            </div>
        )
    }
}
