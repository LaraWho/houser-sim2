import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
// import './wizardFour.css';
import '../wizardStyling.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateLoan, updateMortgage } from '../../ducklings/reducer';


class WizardFour extends Component {
    render() {
        const { updateLoan, updateMortgage } = this.props
        return(
        <div>
            
            <Nav history={this.props.history}/>

            <div className="middle-bar">
                    <div className="dots">
                        <p className="steps">Step 4</p>
                        <img className="step-active" src={require('../../assets/step_completed.png')} alt="step1"/>
                        <img className="step-active" src={require('../../assets/step_completed.png')} alt="step2"/>
                        <img className="step-inactive" src={require('../../assets/step_completed.png')} alt="step3"/>
                        <img className="step-inactive" src={require('../../assets/step_active.png')} alt="step4"/>
                        <img className="step-inactive" src={require('../../assets/step_inactive.png')} alt="step5"/>
                    </div>


                <div>
                    <p className="input-header">Loan Amount</p>
                    <input type="text" 
                    onChange={(e) => updateLoan(e.target.value)}/>
                </div>
                <div>
                    <p className="input-header">Monthly Mortgage</p>
                    <input type="text" 
                    onChange={(e) => updateMortgage(e.target.value)}/>
                </div>

                <Link to="/wizard3"><button className="next-btn">Previous Step</button></Link>
                <Link to="/wizard5"><button className="next-btn">Next Step</button></Link>
            </div>
        </div>
        )
    }
}
function mapStateToProps(state) {
    const { loan_amount, mortgage } = state
    return {
        loan_amount,
        mortgage
    }
}

export default connect(mapStateToProps, { updateLoan, updateMortgage })(WizardFour);