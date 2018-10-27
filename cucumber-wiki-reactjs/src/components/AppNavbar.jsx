import React from 'react';

class AppNavbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/entries">Entries</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/edit">Edit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/find">Find</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <div className="nav-item my-sm-0">
                        <a className="nav-link" href="/login">Login</a>
                    </div>
                    <div className="nav-item my-sm-0">
                        <a className="nav-link" href="/register">Register</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default AppNavbar;