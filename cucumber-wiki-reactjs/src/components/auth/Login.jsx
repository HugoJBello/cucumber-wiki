import React, { Component } from 'react';
import { login } from './authService';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';
import { connect } from 'react-redux';
import { updateUser, getUser } from '../../redux/actions';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            message: '',
        };
    }
    onUpdateUser = (username) => {
        this.props.onUpdateUser(username);
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { username, password } = this.state;

        login({ username, password }).then((result) => {
                localStorage.setItem('jwtToken', result.token);
                this.setState({ message: '' });
                this.onUpdateUser(username);
                this.props.history.push('/')
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    this.setState({ message: 'Login failed. Username or password not match' });
                }
            });
    }
    render() {
        const { username, password, message } = this.state;
        return (
            <div className="container">
                <form className="form-signin" onSubmit={this.onSubmit}>
                    {message !== '' &&
                        <div className="alert alert-warning alert-dismissible" role="alert">
                            {message}
                        </div>
                    }
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" className="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required />
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                    <p>
                        Not a member? <Link to="/register"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
                    </p>
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    user: state.user
});

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onGetUser: getUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
