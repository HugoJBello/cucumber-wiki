
import React, { Component } from 'react';
import Home from './components/Home';
import Entries from './components/Entries';
import EntryPost from './components/EntryPost';
import Find from './components/Find';
import { BrowserRouter as Router, Route } from "react-router-dom";

class Roots extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Route path="/entries" component={Entries} />
                        <Route path="/home" component={Home} />
                        <Route path="/entry/:entryName" component={EntryPost} />
                        <Route path="/find" component={Find} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Roots;