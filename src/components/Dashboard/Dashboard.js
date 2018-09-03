import React, { Component } from 'react';
import './dashboard.css';
import Nav from '../Navigation/Nav';
import Media from "react-media";
import { Link } from 'react-router-dom';
import axios from 'axios';
// import sweetie from 'sweetalert';
import Listings from './listings';
import { connect } from 'react-redux';
import { filterHouses } from '../../ducklings/reducer';

class Dashboard extends Component {
    constructor(props) {
        super(props)
            this.state = {
                houses: [],
                input: ''
            }

            this.handleInputChange = this.handleInputChange.bind(this);
    }

    filterHouses() {
        axios.get('/properties')
        .then(res => {
            console.log('filter')
            this.setState({
                houses: res.data
                })
            let filteredHouses = this.state.houses.filter(des_rent => {
                console.log(des_rent)
                des_rent >= this.state.input
                return filteredHouses
            })

        }).catch(() => {
            console.log('could not filter, dammit')
            })
        }

        handleInputChange(value) {
            this.setState({
                input: value
            })
        }
    

    render() {
        return(
            <div>

                <Nav history={this.props.history}/>
                
                <div className="dash-middle-bar">
                    <Link to="/wizard1"><button className="add-prop-btn">Add New Property</button></Link>

                    <div className="search-area">
                        <Media query="(min-width: 920px)">
                            {matches =>
                            matches ? (
                            <h2 className="search-text">Search properties with desired rent higher than: $ </h2>
                            ) : (
                            <h2 className="search-text-mob">Search properties <br/> with rent higher than:</h2>
                            )}
                        </Media>
                            
                        <input className="search-input" type="text"
                        placeholder="0" value={this.state.input}
                        onChange={(e) => this.handleInputChange(e.target.value)}/>

                        <Media query="(min-width: 920px)">
                            {matches => 
                            matches ? ("") : (<br/>)}
                        </Media>
                        
                        <div className="buttons">
                            <button className="filter-btn"
                            onClick={() => this.filterHouses()}>Filter</button>
                            <button className="reset-btn">Reset</button>
                        </div>
                    </div>

                    <hr/>
                    <h1 className="listing-header">Home Listings</h1>
                    
                    <Listings input={this.state.input}/>

                </div>


            </div>
        )
    }
}

function mapStateToProps(state) {
    const { houses } = state
    return {
        houses
    }
}

export default connect(mapStateToProps, {filterHouses})(Dashboard);