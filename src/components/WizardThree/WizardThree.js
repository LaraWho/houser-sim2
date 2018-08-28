import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import { Link } from 'react-router-dom';
// import axios from 'axios';


class WizardThree extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return(
            <div>
                <Nav />

                <div className="dash-middle-bar">

                    <div className="dots">
                        <p className="steps">Step 3</p>
                        <img className="step-active" src={require('../../assets/step_completed.png')} alt="step1"/>
                        <img className="step-active" src={require('../../assets/step_completed.png')} alt="step2"/>
                        <img className="step-inactive" src={require('../../assets/step_active.png')} alt="step3"/>
                        <img className="step-inactive" src={require('../../assets/step_inactive.png')} alt="step4"/>
                        <img className="step-inactive" src={require('../../assets/step_inactive.png')} alt="step5"/>
                    </div>



                <Link to="/wizard2"><button className="next-btn">Previous Step</button></Link>
                <Link to="/wizard4"><button className="next-btn">Next Step</button></Link>
                </div>


            </div>
        )
    }
}

export default WizardThree;