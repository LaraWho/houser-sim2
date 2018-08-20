import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import { Link } from 'react-router-dom';


class WizardTwo extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return(
        <div>
            <Nav />

            <div className="dash-middle-bar">


                <Link to="/wizard1"><button>Previous Step</button></Link>
                <Link to="/wizard3"><button>Next Step</button></Link>
            </div>
            
        </div>
        )
    }
}

export default WizardTwo;