import React, { Component } from 'react';
import './dashboard.css';
import logo from './header_logo.png';

class Dashboard extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return(
            <div>
                <div className="nav-bar">
                    <img className="dash-logo" src={logo} alt="Houser"/>
                    <h1>Houser</h1>
                </div>
                <div className="dash-middle-bar">

                </div>


            </div>
        )
    }
}

export default Dashboard;