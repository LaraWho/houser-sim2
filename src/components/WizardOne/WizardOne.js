import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import './wizardOne.css';
import { Link } from 'react-router-dom';

class WizardOne extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return(
            <div>
                <Nav />
                <div className="dash-middle-bar">
                    <h1>Add New Listing</h1>
                    <Link to="/dashboard"><button>Cancel</button></Link>


                    <Link to="/wizard2"><button>Next Step</button></Link>
                </div>

            </div>
        )
    }
}

export default WizardOne;