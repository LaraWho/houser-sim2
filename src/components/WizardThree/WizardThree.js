import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImage } from '../../ducklings/reducer';


class WizardThree extends Component {
    render() {
        const { updateImage } = this.props
        return(
            <div>
                <Nav history={this.props.history}/>

                <div className="middle-bar">

                    <div className="dots">
                        <p className="steps">Step 3</p>
                        <img className="step-active" src={require('../../assets/step_completed.png')} alt="step1"/>
                        <img className="step-active" src={require('../../assets/step_completed.png')} alt="step2"/>
                        <img className="step-inactive" src={require('../../assets/step_active.png')} alt="step3"/>
                        <img className="step-inactive" src={require('../../assets/step_inactive.png')} alt="step4"/>
                        <img className="step-inactive" src={require('../../assets/step_inactive.png')} alt="step5"/>
                    </div>

                <div>
                    <p className="input-header">Image URL</p>
                    <input type="text" 
                    onChange={(e) => updateImage(e.target.value)}/>
                </div>

                <Link to="/wizard2"><button className="next-btn">Previous Step</button></Link>
                <Link to="/wizard4"><button className="next-btn">Next Step</button></Link>
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