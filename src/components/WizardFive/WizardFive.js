import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateDesRent } from '../../ducklings/reducer';

class WizardFive extends Component {
    constructor(props) {
        super(props)

        this.addDesRent = this.addDesRent.bind(this);
    }

    addDesRent(e) {
        this.props.updateDesRent(e.target.value)
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
                        <p className="steps">Step 5</p>
                        <img className="one-dot" src={require('../../assets/step_completed.png')} alt="step1"/>
                        <img className="one-dot" src={require('../../assets/step_completed.png')} alt="step2"/>
                        <img className="one-dot" src={require('../../assets/step_completed.png')} alt="step3"/>
                        <img className="one-dot" src={require('../../assets/step_completed.png')} alt="step4"/>
                        <img className="one-dot" src={require('../../assets/step_active.png')} alt="step5"/>
                    </div>
                <div>
                    <p className="input-header rent">Recommended Rent:  </p>
                </div>
                <div>
                    <p className="input-header">Desired Rent</p>
                    <input type="text" 
                    value={this.props.des_rent}
                    onChange={this.addDesRent}/>
                </div>

                <div className="bottom-btns">
                    <Link to="/wizard4"><button className="next-btn">Previous Step</button></Link>
                    <Link to="/dashboard"><button className="complete">Complete</button></Link>
                </div>
            </div>
            
        </div>
        )
    }
}

function mapStateToProps(state) {
    const { des_rent, mortgage } = state
    return {
        des_rent,
        mortgage
    }
}

export default connect(mapStateToProps, { updateDesRent })(WizardFive);