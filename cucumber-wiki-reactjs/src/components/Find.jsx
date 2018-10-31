import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, getUser } from '../redux/actions';

class Find extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.props.onUpdateUser("blah");

        console.log(this.props);
        console.log(this.props.onGetUser());

    }
    render() {
        return (
            <div>Find
        </div>);
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onGetUser: getUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Find);
