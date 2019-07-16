import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap'
import Autocomplete from 'react-google-autocomplete'

class AppForm extends Component {
    render() {
        return (
            <div class="form-container" >
                <Form inline >
                <Autocomplete
                className="autocomplete"
                        style={{ width: '80%' }}
                        onPlaceSelected={(place) => {
                            console.log(place);
                        }}
                        types={['(cities)']}
                        componentRestrictions={{ country: "de" }}
                    />
                    <Button style={{width:'20%'}} variant="outline-info">Search</Button>
                </Form>
            </div>
        );
    }
}

export default AppForm;