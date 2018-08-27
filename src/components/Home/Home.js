import React, { Component } from 'react';
import './home.css';
import authLogo from './auth_logo.png';
import { Link } from 'react-router-dom';
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
    this.getUserHouses = this.getUserHouses.bind(this);
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

getUserHouses() {
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
        console.log('logging-in', res.data)
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
        console.log('registering', res.data)
        this.props.getUser(res.data)
        sweetie({
            text: "REGISTERED!",
            timer: 1000,
            buttons: false})
        setTimeout(() => {
        this.props.history.push('/dashboard');
        }, 1000)
        
    }).catch(() => sweetie("You didn't register...Would you like a jellybaby?"))
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
                    <p className="input-header">Username</p>
                    <input className="login-input" type="text"
                    onChange={(e) => this.handleUsername(e.target.value)}/>
                    <p className="input-header">Password</p>
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