import React from 'react';
import { LoginContext } from './auth/LoginContext';
import { Link } from "react-router-dom";

class AppNavbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/entries">Entries</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/edit">Edit</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/find">Find</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <div className="nav-item my-sm-0">
                        <Link className="nav-link" to="/login">Login</Link>
                    </div>
                    <div className="nav-item my-sm-0">
                        <Link className="nav-link" to="/register">Register</Link>
                    </div>
                    <div className="nav-item my-sm-0">
                    </div>
                </div>
            </nav>
        )
    }
}

export default AppNavbar;
