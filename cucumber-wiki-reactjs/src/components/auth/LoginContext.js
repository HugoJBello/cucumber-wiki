import React from 'react';


// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const LoginContext = React.createContext({
    username: "hugo",
    changeUsername: (username) => {
        this.setState({ username: username })
    },
});