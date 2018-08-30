import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import { Link } from 'react-router-dom';
import '../wizardStyling.css';
import { connect } from 'react-redux';
import { updateAddress, updateCity, updateState, updateZip } from '../../ducklings/reducer';

class WizardTwo extends Component {
    constructor(props) {
        super(props) 

            this.addAddress = this.addAddress.bind(this);
            this.addCity = this.addCity.bind(this);
            this.addState = this.addState.bind(this);
            this.addZip= this.addZip.bind(this);
        }

        addAddress(e){
            console.log(e.target.value)
            this.props.updateAddress(e.target.value)
        }

        addCity(e){
            this.props.updateCity(e.target.value)
        }

        addState(e){
            this.props.updateState(e.target.value)
        }

        addZip(e){
            this.props.updateZip(e.target.value)
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
                        <p className="steps">Step 2</p>
                        <img className="one-dot" src={require('../../assets/step_completed.png')} alt="step1"/>
                        <img className="one-dot" src={require('../../assets/step_active.png')} alt="step2"/>
                        <img className="one-dot" src={require('../../assets/step_inactive.png')} alt="step3"/>
                        <img className="one-dot" src={require('../../assets/step_inactive.png')} alt="step4"/>
                        <img className="one-dot" src={require('../../assets/step_inactive.png')} alt="step5"/>
                </div>

                <div>
                    <p className="input-header">Address</p>
                    <input type="text"
                    value={this.props.address}
                    onChange={this.addAddress} />
                </div>
                <div>
                    <p className="input-header">City</p>
                    <input type="text"
                    value={this.props.city}
                    onChange={this.addCity}/>
                </div>
                <div>
                    <p className="input-header">State</p>
                    <input type="text" 
                    value={this.props.c_state}
                    onChange={this.addState}/>
                </div>
                <div>
                    <p className="input-header">Zip</p>
                    <input type="text" 
                    value={this.props.zipcode}
                    onChange={this.addZip}/>
                </div>


                <div className="bottom-btns">
                    <Link to="/wizard1"><button className="prev-btn">Previous Step</button></Link>
                    <Link to="/wizard3"><button className="next-btn">Next Step</button></Link>
                </div>
            </div>
            
        </div>
        )
    }
}

function mapStateToProps(state) {
    // const { address, city, c_state, zipcode } = state
    return {
        address: state.address,
        city: state.city,
        c_state: state.c_state,
        zipcode: state.zipcode
    }
}

export default connect(mapStateToProps, { updateAddress, updateCity, updateState, updateZip } )(WizardTwo);