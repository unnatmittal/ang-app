import React from 'react';
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import "./Route.css";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function Approute(){
    return (
        <Router>
            <div className="App">
            <Nav />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/shop" component={Shop}/>
            </Switch>
            
        </div>
        </Router>
        
    )
}

const Home=() => {
    <div>
        <h1>Home Page</h1>
    </div>
}

export default Approute;