import './App.css';
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

class Start extends Component{
    render() {
        return (
            <div>
                <Link to="/city"><Button variant="secondary" size="lg">Search by city</Button> </Link>
                <Link to="/country"><Button variant="secondary" size="lg">Search by country</Button> </Link>
            </div>
        );
    }
}

export default Start;