import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap'


class AppForm extends Component {
    render() {
        return (
            <div class="form-container">
                <Form inline >
                    <FormControl type="text" placeholder="Search"/>
                    <Button variant="outline-info">Search</Button>
                </Form>
            </div>
        );
    }
}

export default AppForm;