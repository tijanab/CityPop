import './App.css';
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Country from "./Country";
import City from "./City";
import Start from "./Start";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        CityPop
                    </header>
                    <Switch>
                        <Route exact path="/" component={Start}/>
                        <Route path="/city" component={City}/>
                        <Route path="/country" component={Country}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;
