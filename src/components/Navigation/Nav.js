import React, { Component } from 'react';
import './nav.css';
import logo from './header_logo.png';
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
        axios.delete('/auth/logout')
          .then(res => {
            sweetie({
                text: "Logging out",
                timer: 500,
                buttons: false})
            setTimeout(() => {
            this.props.history.push('/');
            }, 500)
          }).catch((err) => console.log(err))
      }



    render() {
        return(
            <div>
                <div className="nav-bar">
                    <Jump>
                        <div className="nav-bar-logo">
                        <img className="dash-logo" src={logo} alt="Houser"/>
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