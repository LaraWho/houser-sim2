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
    this.getUser = this.getUser.bind(this);
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
        console.log(456789, res.data)
        
        this.props.getUser(res.data)
        this.props.history.push('/dashboard');
        
    })
    .catch(() => sweetie("ACCESS DENIED!"))
    
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
                    <input className="login-input" type="text"
                    onChange={(e) => this.handleUsername(e.target.value)}/>
                    <p className="input-header">Password</p>
                    <input className="login-input" type="password"
                    onChange={(e) => this.handlePassword(e.target.value)}/>
                </div>
                <div>
                    <button className="login" onClick={this.handleLoginRequest}>Login</button>
                    <button className="register">Register</button>
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