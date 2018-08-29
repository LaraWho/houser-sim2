import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import { Link } from 'react-router-dom';
// import './wizardTwo.css';
import '../wizardStyling.css';
import { connect } from 'react-redux';
import { updateAddress, updateCity, updateState, updateZip } from '../../ducklings/reducer';

class WizardTwo extends Component {
    render() {
        const { updateAddress, updateCity, updateState, updateZip } = this.props
        return(
        <div>
            <Nav history={this.props.history}/>

            <div className="middle-bar">

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

                <div>
                    <p className="input-header">Address</p>
                    <input type="text"
                    onChange={(e) => updateAddress(e.target.value)} />
                </div>
                <div>
                    <p className="input-header">City</p>
                    <input type="text"
                    onChange={(e) => updateCity(e.target.value)}/>
                </div>
                <div>
                    <p className="input-header">State</p>
                    <input type="text" 
                    onChange={(e) => updateState(e.target.value)}/>
                </div>
                <div>
                    <p className="input-header">Zip</p>
                    <input type="text" 
                    onChange={(e) => updateZip(e.target.value)}/>
                </div>

                <Link to="/wizard1"><button className="prev-btn-w2">Previous Step</button></Link>
                <Link to="/wizard3"><button className="next-btn-w2">Next Step</button></Link>
            </div>
            
        </div>
        )
    }
}

function mapStateToProps(state) {
    const { address, city, c_state, zipcode } = state
    return {
        address,
        city,
        c_state,
        zipcode
    }
}

export default connect(mapStateToProps, { updateAddress, updateCity, updateState, updateZip } )(WizardTwo);