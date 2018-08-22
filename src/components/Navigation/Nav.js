import React, { Component } from 'react';
import './nav.css';
import logo from './header_logo.png';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            userId: ''
        }

    }



    render() {
        return(
            <div>
                <div className="nav-bar">
                    <Link to="/" className="dash-logo"><img src={logo} alt="Houser"/></Link>
                    <h1 className="nav-header">Houser</h1>
                    <h1 className="nav-header-dash">Dashboard</h1>
                    <Link to="/" className="nav-logout"><h1>Logout</h1></Link>
                </div>
                
            </div>
        )
    }
}

export default Dashboard;