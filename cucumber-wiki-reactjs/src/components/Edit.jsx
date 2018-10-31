import React, { Component } from 'react';
import { getEntry } from './utils/EntriesService';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entryName: props.match.params.entryName,
        };
    }
    async componentDidMount() {
        this.setState({ entry: await getEntry(this.state.entryName) })
    }
    render() {
        return (<div>Entry {this.state.entryName} </div>);
    }
}

export default Edit;
