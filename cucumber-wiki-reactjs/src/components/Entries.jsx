import React, { Component } from 'react';
import { getEntries } from './utils/EntriesService';


class Entries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 10,
            skip: 0,
            entries: null
        }

    }

    async onGetEntries() {
        const entries = await getEntries(10, 0)
        console.log(entries);
        this.setState({ entries });

    };

    async componentDidMount() { await this.onGetEntries() }

    entryTable = (entries) => {
        if (entries) {
            return this.state.entries.map((entry, i) => <div key={i}>{entry.name}</div>)
        }
        else {
            return <div>No entries</div>;
        }
    }

    render() {
        return <div>{ this.entryTable(this.state.entries) }</div>;
    }
}


export default Entries;
