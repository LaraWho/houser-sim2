import React, { Component } from 'react';
import './dashboard.css';
import Nav from '../Navigation/Nav';
import Media from "react-media";
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return(
            <div>

                <Nav />
                
                <div className="dash-middle-bar">
                    <Link to="/wizard1"><button className="add-prop-btn">Add New Property</button></Link>

                    <div className="search-area">
                        <Media query="(min-width: 920px)">
                            {matches =>
                            matches ? (
                            <h2 className="search-text">Search properties with rent higher than: $ </h2>
                            ) : (
                            <h2 className="search-text-mob">Search properties <br/> with rent higher than:</h2>
                            )}
                        </Media>
                            
                        <input className="search-input" type="text"/>

                        <Media query="(min-width: 920px)">
                            {matches => 
                            matches ? ("") : (<br/>)}
                        </Media>
                        <div className="buttons">
                            <button className="filter-btn">Filter</button>
                            <button className="reset-btn">Reset</button>
                        </div>
                    </div>

                    <hr/>
                    <h1 className="listing-header">Home Listings</h1>
                </div>


            </div>
        )
    }
}

export default Dashboard;