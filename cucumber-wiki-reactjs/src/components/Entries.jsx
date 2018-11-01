import React, { Component } from 'react';
import { getEntries } from './utils/EntriesService';
import { Link } from "react-router-dom";
import EntryDisplay from './EntryDisplay.css';


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
            return this.state.entries.map((entry, i) =>
                <div key={i} className="card">
                    <div className="card-body">
                        <Link to={'/entry/' + entry.name} className="card-title">
                            <h4>{entry.title}</h4>
                        </Link>
                        <div className="card-text">
                            {entry.content}
                        </div>
                    </div>
                </div>)
        }
        else {
            return <div>No entries</div>;
        }
    }

    render() {
        return <div className="entry-cards">
            <div className="card-columns">
                {this.entryTable(this.state.entries)}
            </div>
        </div>;
    }
}


export default Entries;
