import React, { Component } from 'react';
import Nav from '../Navigation/Nav';
import { Link } from 'react-router-dom';


class WizardFive extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return(
        <div>
                
                <Nav />

            <div className="dash-middle-bar">


                <Link to="/wizard4"><button>Previous Step</button></Link>
                <Link to="/dashboard"><button>Complete</button></Link>
            </div>
            
        </div>
        )
    }
}

export default WizardFive;