// import React, { Component } from 'react';
// import './dashboard.css';
// import axios from 'axios';
// import sweetie from 'sweetalert';
// import './listings.css';
// import Media from "react-media";
// import { connect } from 'react-redux';
// import { filterHouses } from '../../ducklings/reducer';



// class Listings extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             houses: []
//         }

//         this.deleteHouse = this.deleteHouse.bind(this);
//     }


//     componentDidMount() {
//         axios.get('/properties')
//         .then(res => {
//             this.setState({
//                 houses: res.data
//             })
//         }).catch(() => {
//             console.log('?!?!? Nooo houses')
//             // sweetie({
//             //     title: 'Oh NOOO',
//             //     text: "AAAH!"
//                 // timer: 1000,
//                 // buttons: false
//             })
//             // setTimeout(() => {
//             // this.props.history.push('/');
//             //     }, 1000)
//         // })
//         }

//         deleteHouse(house_id) {
//             axios.delete(`/properties/${house_id}`)
//               .then(res => {
//                 sweetie({
//                         text: "EXTERMINATE!",
//                         timer: 1000,
//                         buttons: false
//                     })
//                 this.setState({
//                     houses: res.data
//                 })
//               })
//             }


//     render() {
//         // console.log('listings state: ', this.state)
        

//         let newHouseArray = this.state.houses.map((house, i) => {

//             const newCalc = house.mortgage.substring(1) * 1.25

//             return(

//             <div key={ i } className="listing-box">
//                 <div>
//                     <img className="prop-img" src={house.image} alt={house.image}/>
//                 </div>
//                 <div className="house-name">
//                     <div className="house-title-box">
//                         <h1 className="house-title">{house.name}</h1>
//                         <p className="house-info-box">{house.info}</p>
                        
//                     </div>
//                 </div>
                
//                 <Media query="(min-width: 920px)">
//                             {matches =>
//                             matches ? (
//                                 <div className="house-info">
//                                 {/* <hr className="horiz"/> */}
//                                 <h1>Loan: {house.loan_amount}</h1>
//                                 <h1>Monthly Mortage: {house.mortgage}</h1>
//                                 <h1>Desired Rent: {house.des_rent}</h1>
//                                 <h1>Recommended Rent: ${newCalc}</h1>
//                                 <h1>Addess: {house.address}</h1>
//                                 <h1>City: {house.city}</h1>
//                                 </div>
//                             ) : (
//                                 <div className="house-info">
//                                 {/* <hr className="horiz"/> */}
//                                 <h1>{house.address}</h1>
//                                 <h1>{house.city}</h1>
//                                 </div>
//                             )}
//                         </Media>
//                             <div className="x"
//                             onClick={() => this.deleteHouse(house.house_id)}>x</div>
//                 </div>
                

//         )})
//         return(
            
//            newHouseArray 
           
//          )}
//     }

//     function mapStateToProps(state) {
//         const { houses } = state
//         return {
//             houses
//         }
//     }
    
// export default connect(mapStateToProps, {filterHouses})(Listings);