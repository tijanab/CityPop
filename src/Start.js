import './App.css';
import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

function Start(){
        return(
            <div>
                <Link to="/city"><Button variant="secondary" size="lg">Search by city</Button> </Link>
                <Link to="/country"><Button variant="secondary" size="lg">Search by country</Button> </Link>
            </div>
        );
}

export default Start;