
import React, { Component } from 'react';
import Home from './components/Home';
import Entries from './components/Entries';
import EntryPost from './components/EntryPost';
import Find from './components/Find';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Edit from './components/Edit';
import Login from './components/auth/Login';
import Create from './components/auth/Register';

class Roots extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Route path="/entries" component={Entries} />
                        <Route path="/home" component={Home} />
                        <Route path="/entry/:entryName" component={EntryPost} />
                        <Route path="/edit/:entryName" component={Edit} />
                        <Route path="/find" component={Find} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Create} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Roots;