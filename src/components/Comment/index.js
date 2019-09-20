import React, { Component } from 'react'
import { Card, Row } from "react-bootstrap";
import Form from './Form'
import CommentCard from './CommentCard'
import axios from 'axios';
import Cookies from 'js-cookie';



export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            id: '',
            profile: ''
        }
    }

    async refreshComment() {
        let commentResponse = await axios.get('http://localhost:4000/comment/' +
            this.state.id);
        this.setState({ comments: commentResponse.data.comments })
    }

    async componentWillMount() {
        await this.setState({ id: this.props.event.id })
        await this.refreshComment();
        let { data } = await axios.get(`https://api.instagram.com/v1/users/self/?access_token=${Cookies.get('accessToken')}`);
        this.setState({ profile: data.data })
    }
    render() {
        return (
            <Card style={{
                width: '45%',
                margin: 'auto',
                padding: '30px'
            }}>
                <Row>
                    <Form profile={this.props.profile}
                        event={this.props.event}></Form>
                </Row>
                <Row>
                    {
                        this.state.comments.map((comment, i) => (
                            <CommentCard comment={comment} key={i}></CommentCard>
                        ))
                    }
                </Row>
            </Card>
        )
    }
}
