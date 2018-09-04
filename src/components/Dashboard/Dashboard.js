import React, { Component } from 'react';
import './dashboard.css';
import './listings.css';
import Nav from '../Navigation/Nav';
import Media from "react-media";
import { Link } from 'react-router-dom';
import axios from 'axios';
import sweetie from 'sweetalert';

class Dashboard extends Component {
    constructor(props) {
        super(props)
            this.state = {
                houses: [],
                filteredHouses: [],
                newHouseArray: [],
                input: '',
                showFilter: false
            }

            this.handleInputChange = this.handleInputChange.bind(this);
            this.deleteHouse = this.deleteHouse.bind(this);
            this.filterHouses = this.filterHouses.bind(this);
            this.getHouses = this.getHouses.bind(this);
            this.toggleFilter = this.toggleFilter.bind(this);
    }

    componentDidMount(){
        this.getHouses()
    }

        getHouses() {
            axios.get('/properties')
            .then(res => {
                console.log('populating houses state', res.data)
                this.setState({
                    houses: res.data
                    }) 
                }).catch(() => {
                    console.log('could not filter, dammit')
                    })
                }

        

        filterHouses() {
            this.setState({
                    showFilter: !this.state.showFilter,
                    filteredHouses: this.state.houses.filter(response => {
                    console.log('filterHouses method, des_rent amounts', response.des_rent.substring(1))
                    return response.des_rent.substring(1) >= this.state.input

                })
            }) 
            console.log('filteredHouses state array', this.state.filteredHouses)
        }

        toggleFilter() {
            this.setState({
                showFilter: !this.state.showFilter
            })
        }

        handleInputChange(value) {
            this.setState({
                input: value
            })
        }

        deleteHouse(house_id) {
            axios.delete(`/properties/${house_id}`)
              .then(res => {
                sweetie({
                        text: "EXTERMINATE!",
                        timer: 1000,
                        buttons: false
                    })
                this.setState({
                    houses: res.data
                })
              })
            }
    

    render() {
            let newHouseArray = [];

            if(!this.state.showFilter) {
                    newHouseArray = this.state.houses
            
            } else {
                    newHouseArray = this.state.filteredHouses
            }
            
            let mapper = newHouseArray.map((house, i) => {

            const newCalc = house.mortgage.substring(1) * 1.25

            return(

            <div key={ i } className="listing-box">
                <div>
                    <img className="prop-img" src={house.image} alt={house.image}/>
                </div>
                <div className="house-name">
                    <div className="house-title-box">
                        <h1 className="house-title">{house.name}</h1>
                        <p className="house-info-box">{house.info}</p>
                        
                    </div>
                </div>
                
                <Media query="(min-width: 920px)">
                            {matches =>
                            matches ? (
                                <div className="house-info">
                                {/* <hr className="horiz"/> */}
                                <h1>Loan: {house.loan_amount}</h1>
                                <h1>Monthly Mortage: {house.mortgage}</h1>
                                <h1>Desired Rent: {house.des_rent}</h1>
                                <h1>Recommended Rent: ${newCalc}</h1>
                                <h1>Addess: {house.address}</h1>
                                <h1>City: {house.city}</h1>
                                </div>
                            ) : (
                                <div className="house-info">
                                {/* <hr className="horiz"/> */}
                                <h1>{house.address}</h1>
                                <h1>{house.city}</h1>
                                </div>
                            )}
                        </Media>
                            <div className="x"
                            onClick={() => this.deleteHouse(house.house_id)}>x</div>
                </div>
                

        )})



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
                            onClick={this.filterHouses}>Filter</button>
                            <button className="reset-btn"
                            onClick={this.toggleFilter}>Reset</button>
                        </div>
                    </div>

                    <hr/>
                    <h1 className="listing-header">Home Listings</h1>
                    

                        <div>
                            { mapper }
                        </div>
                

                </div>


            </div>
        )
    }
}


export default Dashboard;