import React, { Component } from 'react';
import { Row } from 'react-bootstrap'
import AppCard from "../components/AppCard.js";
import '../App.css';
import axios from 'axios'

class Feed extends Component {
    constructor(props){
        super(props);
        this.state = {
            clubs : []
        }
    }
    componentWillMount(){
        axios.get('http://5d2c5c648c900700149724a1.mockapi.io/club')
        .then((clubs)=>{
            this.setState({clubs : clubs.data})
        })
        .catch(err => console.error(err))
    }
    render() {
        const clubItems = this.state.clubs.map(club => (
            <Row>
            <AppCard key={club.id} club={club}/>
            </Row>
        ))
        return (
            <div className="feed">
                    {clubItems}
            </div>
        );
    }
}

export default Feed;
