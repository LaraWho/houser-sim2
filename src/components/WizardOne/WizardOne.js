import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import './wizardOne.css';
import { Link } from 'react-router-dom';
// import active from './step_active.png';
// import inactive from './step_inactive.png';
// import axios from 'axios';

class WizardOne extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return(
            <div>
                <Nav />
                <div className="dash-middle-bar-w1">
                    <h1 className="add-new-header">Add New Listing</h1>
                    <div className="cancel">
                        <Link to="/dashboard" ><button className="cancel-btn">Cancel</button></Link>
                    </div>

                    <div className="dots">
                        <p className="steps">Step 1</p>
                        <img className="step-active" src={require('../../assets/step_active.png')} alt="step1"/>
                        <img className="step-inactive" src={require('../../assets/step_inactive.png')} alt="step2"/>
                        <img className="step-inactive" src={require('../../assets/step_inactive.png')} alt="step3"/>
                        <img className="step-inactive" src={require('../../assets/step_inactive.png')} alt="step4"/>
                        <img className="step-inactive" src={require('../../assets/step_inactive.png')} alt="step5"/>
                    </div>

                    <div className="next">
                        <Link to="/wizard2" ><button className="firstnext-btn">Next Step</button></Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default WizardOne;