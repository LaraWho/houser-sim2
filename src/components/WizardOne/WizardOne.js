import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import './wizardOne.css';
import { Link } from 'react-router-dom';
import active from './step_active.png';
import inactive from './step_inactive.png';
// import axios from 'axios';

class WizardOne extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return(
            <div>
                <Nav />
                <div className="dash-middle-bar">
                    <h1 className="add-new-header">Add New Listing</h1>
                    <Link to="/dashboard" className="cancel-btn"><button>Cancel</button></Link>

                    {/* <img src={active} src=""/>
                    <img src={inactive} src=""/>
                    <img src={inactive} src=""/>
                    <img src={inactive} src=""/>
                    <img src={inactive} src=""/> */}

                    <Link to="/wizard2" className="next-btn"><button>Next Step</button></Link>
                </div>

            </div>
        )
    }
}

export default WizardOne;