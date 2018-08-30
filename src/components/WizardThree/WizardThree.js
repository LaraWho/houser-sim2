import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImage } from '../../ducklings/reducer';


class WizardThree extends Component {
    constructor(props) {
        super(props)

        this.addImage = this.addImage.bind(this);
    }

    addImage(e) {
        this.props.updateImage(e.target.value)
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
                        <p className="steps">Step 3</p>
                        <img className="one-dot" src={require('../../assets/step_completed.png')} alt="step1"/>
                        <img className="one-dot" src={require('../../assets/step_completed.png')} alt="step2"/>
                        <img className="one-dot" src={require('../../assets/step_active.png')} alt="step3"/>
                        <img className="one-dot" src={require('../../assets/step_inactive.png')} alt="step4"/>
                        <img className="one-dot" src={require('../../assets/step_inactive.png')} alt="step5"/>
                    </div>

                <div>
                    <p className="input-header">Image URL</p>
                    <input type="text" 
                    onChange={this.addImage}/>
                </div>
                
                <div className="bottom-btns">
                    <Link to="/wizard2"><button className="prev-btn">Previous Step</button></Link>
                    <Link to="/wizard4"><button className="next-btn">Next Step</button></Link>
                </div>

                </div>


            </div>
        )
    }
}

function mapStateToProps(state) {
    const { image } = state
    return {
        image
    }
}

export default connect(mapStateToProps, { updateImage } )(WizardThree);