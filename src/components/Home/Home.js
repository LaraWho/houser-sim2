import React, { Component } from 'react';
import './home.css';
import authLogo from './auth_logo.png';
import { Link } from 'react-router-dom';

class Home extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return(
            <div>
                <div className="middle-bar">
                <Link to="/dashboard"><img className="auth-logo" src={authLogo} alt="Houser"/></Link>
                <div>
                    <p className="input-header">Username</p>
                    <input className="login-input" type="text"/>
                    <p className="input-header">Password</p>
                    <input className="login-input" type="text"/>
                </div>
                <div>
                    <button className="login">Login</button>
                    <button className="register">Register</button>
                </div>
                </div>

            </div>
        )
    }
}

export default Home;