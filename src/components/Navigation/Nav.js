import React, { Component } from 'react';
import './nav.css';
import logo from './header_logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Jump from 'react-reveal/Jump';
import sweetie from 'sweetalert';

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
        console.log(675685)
        axios.delete('/auth/logout')
          .then(res => {
            console.log(this.props.history)
            sweetie({
                text: "Logging out",
                timer: 2000,
                buttons: false})
            setTimeout(() => {
            this.props.history.push('/');
            }, 1000)
          }).catch((err) => console.log(err))
      }



    render() {
        return(
            <div>
                <div className="nav-bar">
                    <Jump>
                        <div className="nav-bar-logo">
                        <Link to="/" className="dash-logo"><img src={logo} alt="Houser"/></Link>
                        </div>
                    </Jump>
                    <h1 className="nav-header">Houser</h1>
                    <h1 className="nav-header-dash">Dashboard</h1>
                    
                </div>
                <div className="logout">
                    <h1 className="nav-logout"
                    onClick={this.logout}>Logout</h1>
                </div>
                
            </div>
        )
    }
}

export default Dashboard;