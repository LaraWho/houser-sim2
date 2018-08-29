import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
// import './wizardOne.css';
import '../wizardStyling.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateInfo } from '../../ducklings/reducer';

class WizardOne extends Component {

    render() {
        const { updateName, updateInfo } = this.props
        return(
            <div>
                <Nav history={this.props.history}/>

                <div className="middle-bar">
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

                    <div>
                        <p>Property Name</p>
                        <input type="text" className="input-header"
                        onChange={(e) => updateName(e.target.value)}/>
                    </div>
                    <div>
                        <p>Property Description</p>
                        <input type="text" className="input-header"
                        onChange={(e) => updateInfo(e.target.value)}/>
                    </div>

                    <div className="next">
                        <Link to="/wizard2"><button className="firstnext-btn">Next Step</button></Link>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const { name, info } = state
    return {
        name,
        info
    }
}

export default connect(mapStateToProps, { updateName, updateInfo })(WizardOne);