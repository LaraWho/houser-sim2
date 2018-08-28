import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import { Link } from 'react-router-dom';
import './wizardTwo.css';
// import axios from 'axios';

class WizardTwo extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return(
        <div>
            <Nav />

            <div className="dash-middle-bar-w2">

                 <h1 className="add-new-header-w2">Add New Listing</h1>
                    <div className="cancel-w2">
                        <Link to="/dashboard" ><button className="cancel-btn-w2">Cancel</button></Link>
                    </div>

                <div className="dots-w2">
                        <p className="steps-w2">Step 2</p>
                        <img className="step-w2" src={require('../../assets/step_completed.png')} alt="step1"/>
                        <img className="step-w2" src={require('../../assets/step_active.png')} alt="step2"/>
                        <img className="step-w2" src={require('../../assets/step_inactive.png')} alt="step3"/>
                        <img className="step-w2" src={require('../../assets/step_inactive.png')} alt="step4"/>
                        <img className="step-w2" src={require('../../assets/step_inactive.png')} alt="step5"/>
                </div>


                <Link to="/wizard1"><button className="prev-btn-w2">Previous Step</button></Link>
                <Link to="/wizard3"><button className="next-btn-w2">Next Step</button></Link>
            </div>
            
        </div>
        )
    }
}

export default WizardTwo;