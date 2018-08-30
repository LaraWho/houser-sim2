import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
// import './wizardOne.css';
import '../wizardStyling.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateInfo } from '../../ducklings/reducer';

class WizardOne extends Component {
    constructor(props) {
        super(props) 

            this.addName = this.addName.bind(this);
            this.addInfo = this.addInfo.bind(this);
        
    }

    addName(e) {
        this.props.updateName(e.target.value)
    }

    //these methods take my reducer function and pass in whatever text is input by the user
    addInfo(e) {
        this.props.updateInfo(e.target.value)
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
                        <p className="steps">Step 1</p>
                        <img className="one-dot" src={require('../../assets/step_active.png')} alt="step1"/>
                        <img className="one-dot" src={require('../../assets/step_inactive.png')} alt="step2"/>
                        <img className="one-dot" src={require('../../assets/step_inactive.png')} alt="step3"/>
                        <img className="one-dot" src={require('../../assets/step_inactive.png')} alt="step4"/>
                        <img className="one-dot" src={require('../../assets/step_inactive.png')} alt="step5"/>
                    </div>

                    <div>
                        <p className="input-header">Property Name</p>
                        <input type="text" 
                        //the value is the state on the reducer, 
                        //when passed into this component it is accessed through 'props'
                        value={this.props.name}
                        //this invokes the local method I created on this component to capture the info typed in
                        onChange={this.addName}/>
                    </div>
                    <div>
                        <p className="input-header">Property Description</p>
                        <textarea className="text-area" cols="40" rows="10"
                        value={this.props.info}
                        onChange={this.addInfo}></textarea>
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
    return {
        name: state.name,
        info: state.info
    }
}

export default connect(mapStateToProps, { updateName, updateInfo })(WizardOne);