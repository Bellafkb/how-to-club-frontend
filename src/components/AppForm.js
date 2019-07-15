import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap'


class AppForm extends Component {
    getStyle() {
        return {
            margin: 'auto',
            width: '60%',
            padding: '10px',
        };
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <Form inline>
                    <FormControl style={this.getStyle()} type="text" placeholder="Search"  />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </div>

        );
    }
}

export default AppForm;
