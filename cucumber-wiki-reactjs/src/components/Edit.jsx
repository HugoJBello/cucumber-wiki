import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entryName: props.match.params.entryName,
            backendUrl: "http://hbello.info"
        };
    }
    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get(this.state.backendUrl + '/entries/entry/name=' + this.state.entryName)
            .then(res => {
                this.state.entry = res;
                console.log(res);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    this.props.history.push("/login");
                }
            });
    }
    render() {
        return (<div>Entry {this.state.entryName} </div>);
    }
}

export default Edit;