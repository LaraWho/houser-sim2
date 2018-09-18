import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImage, resetInputs } from '../../ducklings/reducer';


class WizardThree extends Component {
    constructor(props) {
        super(props)

        this.addImage = this.addImage.bind(this);
        this.clearInputs = this.clearInputs.bind(this);

    }

    addImage(e) {
        this.props.updateImage(e.target.value)
    }

    clearInputs() {
        this.props.resetInputs()
    }

    render() {
        return(
            <div>
                <Nav history={this.props.history}/>

                <div className="middle-bar">

                    <h1 className="add-new-header">Add New Listing</h1>
                    <div className="cancel">
                        <Link to="/dashboard" ><button className="cancel-btn"
                        onClick={() => this.clearInputs()}>Cancel</button></Link>
                    </div>

                    <div className="dots">
                        <p className="steps">Step 3</p>
                        <img className="one-dot" src={require('../../assets/step_completed.png')} alt="step1"/>
                        <img className="one-dot" src={require('../../assets/step_completed.png')} alt="step2"/>
                        <img className="one-dot" src={require('../../assets/step_active.png')} alt="step3"/>
                        <img className="one-dot" src={require('../../assets/step_inactive.png')} alt="step4"/>
                        <img className="one-dot" src={require('../../assets/step_inactive.png')} alt="step5"/>
                    </div>

                <div className="image-box" value={this.props.image}>
                        <img className="image-preview" src={this.props.image} alt={this.props.image}/>
                </div>

                <div>
                    <p className="input-header">Image URL</p>
                    <input type="text" 
                    onChange={this.addImage}
                    value={this.props.image}/>
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

export default connect(mapStateToProps, { updateImage, resetInputs } )(WizardThree);