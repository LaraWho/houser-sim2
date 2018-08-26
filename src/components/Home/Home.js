import React, { Component } from 'react';
import './home.css';
import authLogo from './auth_logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Jump from 'react-reveal/Jump';


class Home extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            userId: ''
        }
    

    this.handleLoginRequest = this.handleLoginRequest.bind(this);
    this.getUser = this.getUser.bind(this);
}

getUser() {
    axios.get('/auth').then( () => {
        this.props.history.push('/dashboard');
    }).catch(res => {
        this.props.history.push('/');
    })
}

handleLoginRequest(e) {
    axios.post('/auth/login', {
        username: this.state.username,
        password: this.state.password
    }).then(res => {
        this.props.history.push();
        console.log(res)
    })
    // .catch(err => {
    //     res.status(401).send({errorMessage: 'not found'})
    //     console.log(err)
    // })
}

    render() {
        return(
            <div className="middle-bar">
                <Jump>
                    <div>
                    <Link to="/dashboard"><img className="auth-logo" src={authLogo} alt="Houser"/></Link>
                    </div>
                </Jump>
                <div>
                    <p className="input-header">Username</p>
                    <input className="login-input" type="text"/>
                    <p className="input-header">Password</p>
                    <input className="login-input" type="text"/>
                </div>
                <div>
                    <button className="login" onClick={this.handleLoginRequest}>Login</button>
                    <button className="register">Register</button>
                </div>

            </div>
        )
    }
}

export default Home;