import React, { Component } from 'react';

class EntryPost extends Component {
    constructor(props) {
        super(props);
        this.state = { entryName: props.match.params.entryName };
    }
    render() {
        return (<div>Entry {this.state.entryName} </div>);
    }
}

export default EntryPost;