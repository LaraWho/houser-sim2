import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateDesRent, updateRecRent } from '../../ducklings/reducer';
import axios from 'axios';
// import sweetie from 'sweetalert';

class WizardFive extends Component {
    constructor(props) {
        super(props)

        this.addDesRent = this.addDesRent.bind(this);
        this.addHouse = this.addHouse.bind(this);
    }

    addDesRent(e) {
        this.props.updateDesRent(e.target.value)
    }

    addHouse() {
        const { name, info, address, city, c_state, zipcode, image, loan_amount, mortgage, des_rent, rec_rent } = this.props

        axios.post('/properties', {name, info, address, city, c_state, zipcode, image, loan_amount, mortgage, des_rent, rec_rent})
        .then(res => {
            this.props.history.push("/dashboard")
        }).catch(() => console.log("Couldn't add a house!!"))
        }

    


    render() {
        const number = +this.props.mortgage;
        const maths = (number) / 100 * 25;
        const calculation = (number + maths);

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
                    <p className="input-header rent">Recommended Rent: ${calculation}  </p>
                </div>
                <div>
                    <p className="input-header">Desired Rent</p>
                    <input type="text" 
                    value={this.props.des_rent}
                    onChange={this.addDesRent}/>
                </div>

                <div className="bottom-btns">
                    <Link to="/wizard4"><button className="next-btn">Previous Step</button></Link>
                    <button className="complete"
                    onClick={this.addHouse}>Complete</button>
                </div>
            </div>
            
        </div>
        )
    }
}


function mapStateToProps(state) {
    const { name, info, address, city, c_state, zipcode, image, loan_amount, mortgage, des_rent, rec_rent } = state
    return {
        name,
        info,
        address, 
        city, 
        c_state, 
        zipcode, 
        image, 
        loan_amount, 
        mortgage, 
        des_rent,
        rec_rent
    }
}

export default connect(mapStateToProps, { updateDesRent, updateRecRent })(WizardFive);