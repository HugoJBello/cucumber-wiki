import React from 'react';
import {login} from './authService';

export const context = {
    username: "hugo",
    changeUsername: (username) => {
        console.log(username);
        this.setState({ username: username });
        }
    };

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const LoginContext = React.createContext();