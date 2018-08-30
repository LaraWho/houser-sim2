import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
// import './wizardFour.css';
import '../wizardStyling.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateLoan, updateMortgage } from '../../ducklings/reducer';


class WizardFour extends Component {
    constructor(props) {
        super(props)

        this.addLoan = this.addLoan.bind(this);
        this.addMortgage = this.addMortgage.bind(this);

    }

    addLoan(e) {
        this.props.updateLoan(e.target.value)
    }

    addMortgage(e) {
        this.props.updateMortgage(e.target.value)
    }

    render() {
        return(
        <div>
            
            <Nav history={this.props.history}/>

            <div className="middle-bar">

                    <h1 className="add-new-header">Add New Listing</h1>
                    <div className="cancel">
                        <Link to="/dashboard" ><button className="cancel-btn">Cancel</button></Link>
                    </div>

                    <div className="dots">
                        <p className="steps">Step 4</p>
                        <img className="one-dot" src={require('../../assets/step_completed.png')} alt="step1"/>
                        <img className="one-dot" src={require('../../assets/step_completed.png')} alt="step2"/>
                        <img className="one-dot" src={require('../../assets/step_completed.png')} alt="step3"/>
                        <img className="one-dot" src={require('../../assets/step_active.png')} alt="step4"/>
                        <img className="one-dot" src={require('../../assets/step_inactive.png')} alt="step5"/>
                    </div>


                <div>
                    <p className="input-header">Loan Amount</p>
                    <input type="text" 
                    value={this.props.loan_amount}
                    onChange={this.addLoan}/>
                </div>
                <div>
                    <p className="input-header">Monthly Mortgage</p>
                    <input type="text" 
                    value={this.props.mortgage}
                    onChange={this.addMortgage}/>
                </div>


                <div className="bottom-btns">
                    <Link to="/wizard3"><button className="prev-btn">Previous Step</button></Link>
                    <Link to="/wizard5"><button className="next-btn">Next Step</button></Link>
                </div>
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