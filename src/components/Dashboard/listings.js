import React, { Component } from 'react';
import './dashboard.css';
import axios from 'axios';
import sweetie from 'sweetalert';

class Listings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios.get('/properties')
        .then(res => {
            this.setState({
                houses: res.data
            })
        }).catch(() => {
            console.log('?!?!?')
            // sweetie({
            //     title: 'Oh NOOO',
            //     text: "AAAH!"
                // timer: 1000,
                // buttons: false
            })
            // setTimeout(() => {
            // this.props.history.push('/');
            //     }, 1000)
        // })
        }

    render() {
        console.log('listings state: ', this.state)
        let newHouseArray = this.state.houses.map((house, i) => {
            return(
        
            <div key={ i } >
                <div>
                    <img className="prop-img" src={house.image} alt=""/>
                </div>
                <div>
                    <h1>{house.name}</h1>
                </div>
                <div>
                    <p>{house.info}</p>
                    <h1>Loan: {house.loan_amount}</h1>
                    <h1>Monthly Mortage: {house.mortgage}</h1>
                    {/* <h1>Recommended Rent: {house.rec_rent}</h1> */}
                    <h1>Desired Rent: {house.des_rent}</h1>
                    <h1>Addess: {house.address}</h1>
                    <h1>City: {house.city}</h1>
                </div>
                <div>x</div>
            </div>

        )})
        return(
            
           newHouseArray 
 
         )}
    }

    
export default Listings;