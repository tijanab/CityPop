import './App.css';
import Geonames from "geonames.js";
import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";

class City extends Component{
    render() {
        return (
            <div>
                SEARCH BY CITY
                <Form>
                    <Form.Group controlId="formBasic" className="form">
                        <Form.Control type="text" placeholder="Enter a city" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </div>
        );
    }
    /*const geonames = Geonames({
        username: 'weknowit',
        lan: 'en',
        encoding: 'JSON'
    });*/

}

export default City;