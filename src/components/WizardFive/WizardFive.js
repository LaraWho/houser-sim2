import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import { Link } from 'react-router-dom';
// import './wizardFive.css';
import { connect } from 'react-redux';
import { updateDesRent, updateRecRent } from '../../ducklings/reducer';

class WizardFive extends Component {
    render() {
        const { updateDesRent, updateRecRent } = this.props
        return(
        <div>
                
                <Nav history={this.props.history}/>

            <div className="middle-bar">
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
                <div>
                    <p className="input-header">Recommended Rent:  </p>
                </div>
                <div>
                    <p className="input-header">Desired Rent</p>
                    <input type="text" 
                    onChange={(e) => updateDesRent(e.target.value)}/>
                </div>


                <Link to="/wizard4"><button className="next-btn">Previous Step</button></Link>
                <Link to="/dashboard"><button className="complete">Complete</button></Link>
            </div>
            
        </div>
        )
    }
}

function mapStateToProps(state) {
    const { des_rent, rec_rent, mortgage } = state
    return {
        des_rent,
        rec_rent,
        mortgage
    }
}

export default connect(mapStateToProps, { updateDesRent, updateRecRent })(WizardFive);