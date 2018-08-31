import React, { Component } from 'react';
import './home.css';
import authLogo from './auth_logo.png';
import axios from 'axios';
import Jump from 'react-reveal/Jump';
import { getUser } from '../../ducklings/reducer';
import { connect } from 'react-redux';
import sweetie from 'sweetalert';


class Home extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            userId: ''
        }
    

    this.handleLoginRequest = this.handleLoginRequest.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
}

handleUsername = val => {
    this.setState({
        username: val
    })
}

handlePassword = val => {
    this.setState({
        password: val
    })
}

handleLoginRequest(e) {
    axios.post('/auth/login', {
        username: this.state.username,
        password: this.state.password
    }).then(res => {
        this.props.getUser(res.data)
        sweetie({
            text: "LOGGING IN!",
            timer: 1000,
            buttons: false})
        setTimeout(() => {
            this.props.history.push('/dashboard');
            }, 1000)
    })
    .catch(() => sweetie("Please Register, you don't seem to exist yet!"))
}


handleRegister(e) {
    axios.post('/auth/register', {
        username: this.state.username,
        password: this.state.password
    }).then(res => {
        if(this.state.username.length && this.state.password.length >= 5) {
        console.log('registering in front', res.data)
        this.props.getUser(res.data)
        sweetie({
            text: "REGISTERED!",
            timer: 1000,
            buttons: false})
        setTimeout(() => {
        this.props.history.push('/dashboard');
        }, 1000)
        } else {
            console.log('should not be registering', res.data)
            sweetie("More than 5 characters each, please!")
        }
    }).catch(() => sweetie({
            title: "Could not register due to lack of character",
            text: "5 character minimum here"}))
}



    render() {
        return(
            <div className="middle-bar">
                <Jump>
                    <div>
                    <img className="auth-logo" src={authLogo} alt="Houser"/>
                    </div>
                </Jump>
                <div>
                    <p className="input-header-login">Username</p>
                    <input className="login-input" type="text"
                    onChange={(e) => this.handleUsername(e.target.value)}/>
                    <p className="input-header-login">Password</p>
                    <input className="login-input" type="password"
                    onChange={(e) => this.handlePassword(e.target.value)}/>
                    <h6 className="password-rules">10 character limit</h6>
                </div>
                <div>
                    <button className="login" onClick={this.handleLoginRequest}>Login</button>
                    <button className="register" onClick={this.handleRegister}>Register</button>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}



export default connect(mapStateToProps, { getUser } )(Home);