import React, { Component } from 'react';
import './nav.css';
import logo from './header_logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            userId: ''
        }

        this.logout = this.logout.bind(this);

    }

    logout() {
        axios.delete('/auth/logout')
          .then(res => {
            this.props.history.push('/dashboard')
            console.log('logged out')
          })
      }



    render() {
        return(
            <div>
                <div className="nav-bar">
                    <Link to="/" className="dash-logo"><img src={logo} alt="Houser"/></Link>
                    <h1 className="nav-header">Houser</h1>
                    <h1 className="nav-header-dash">Dashboard</h1>
                    <h1 className="nav-logout"
                    onClick={this.logout} >Logout</h1>
                </div>
                
            </div>
        )
    }
}

export default Dashboard;