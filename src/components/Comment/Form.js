import React, { Component } from 'react'
import { Container, InputGroup, Row, Col, Button, FormControl } from "react-bootstrap";
import axios from 'axios'
import Cookies from 'js-cookie'


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            profile: '',
            isLogedIn: false
        }
    }

    handleOnChange(event) {
        this.setState({ comment: event.target.value })
    }

    async componentWillMount() {
        try {
            let { data } = await axios.get(`http://localhost:4000/profile`,
                { headers: { accessToken: Cookies.get('jwtToken') } });
            console.log(data)
            this.setState({ profile: data.profile, isLogedIn: true })
        } catch (error) {

        }

    }

    async submitComment() {
        if (this.state !== '') {
            const id = this.props.event.id;
            try {
                let response = await axios.post('http://localhost:4000/comment', {
                    text: this.state.comment,
                    userId: this.props.profile.username,
                    eventId: id,
                    profile_picture: this.state.profile.profile_picture
                });
                console.log(response);
                this.setState({ comment: '' })
            } catch (error) {
                throw error;
            }
        }
    }
    render() {
        return (
            <Container>
                <Row style={{ marginBottom: '10px' }}>
                    <Col sm={2} >
                        <img src={this.state.profile.profile_picture} style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: 300
                        }} alt=""></img>
                    </Col>
                    <Col>
                        <h6>{this.state.profile.username}</h6>
                        <InputGroup onChange={(event) => {
                            this.handleOnChange(event);
                        }}>
                            <FormControl as="textarea" aria-label="With textarea" />
                        </InputGroup>
                    </Col>

                </Row >
                <Row>
                    {
                        this.state.isLogedIn ?
                            (<Button style={{ marginLeft: '80%' }} onClick={() => this.submitComment()}>comment</Button>) :
                            (<Button style={{ marginLeft: '80%' }} onClick={() => this.submitComment()} disabled>comment</Button>)
                    }

                </Row>
            </Container>

        )
    }
}
