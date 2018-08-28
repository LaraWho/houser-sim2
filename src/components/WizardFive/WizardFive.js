import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import { Link } from 'react-router-dom';
import './wizardFive.css';
// import axios from 'axios';

class WizardFive extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return(
        <div>
                
                <Nav />

            <div className="dash-middle-bar-w5">
                    <h1 className="add-new-header">Add New Listing</h1>
                        <div className="cancel">
                        <Link to="/dashboard" ><button className="cancel-btn">Cancel</button></Link>
                        </div>


                    <div className="dots">
                        <p className="steps">Step 5</p>
                        <img className="step-active" src={require('../../assets/step_completed.png')} alt="step1"/>
                        <img className="step-active" src={require('../../assets/step_completed.png')} alt="step2"/>
                        <img className="step-inactive" src={require('../../assets/step_completed.png')} alt="step3"/>
                        <img className="step-inactive" src={require('../../assets/step_completed.png')} alt="step4"/>
                        <img className="step-inactive" src={require('../../assets/step_active.png')} alt="step5"/>
                    </div>

                <Link to="/wizard4"><button className="next-btn">Previous Step</button></Link>
                <Link to="/dashboard"><button className="complete">Complete</button></Link>
            </div>
            
        </div>
        )
    }
}

export default WizardFive;