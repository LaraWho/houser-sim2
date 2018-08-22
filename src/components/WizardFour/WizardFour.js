import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import './wizardFour.css';
import { Link } from 'react-router-dom';
// import axios from 'axios';


class WizardFour extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return(
        <div>
            
            <Nav />

            <div className="dash-middle-bar">


                <Link to="/wizard3"><button>Previous Step</button></Link>
                <Link to="/wizard5"><button>Next Step</button></Link>
            </div>
        </div>
        )
    }
}

export default WizardFour;