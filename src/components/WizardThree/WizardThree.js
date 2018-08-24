import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import { Link } from 'react-router-dom';
// import axios from 'axios';


class WizardThree extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return(
            <div>
                <Nav />

                <div className="dash-middle-bar">




                <Link to="/wizard2"><button>Previous Step</button></Link>
                <Link to="/wizard4"><button>Next Step</button></Link>
                </div>


            </div>
        )
    }
}

export default WizardThree;