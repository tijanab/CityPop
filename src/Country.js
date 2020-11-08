import './App.css';
import React, {Component} from "react";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";

class Country extends Component{
    render() {
        return (
            <div>
                SEARCH BY A COUNTRY
                <Form>
                    <Form.Group controlId="formBasic" className="form">
                        <Form.Control type="text" placeholder="Enter a country" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Country;