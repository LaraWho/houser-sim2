// import React, { Component } from 'react';
// import './dashboard.css';
// import axios from 'axios';
// import sweetie from 'sweetalert';

// class Listings extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             houses: []
//         }

//         // this.handleLoad = this.handleLoad.bind(this);
//     }

//     // handleLoad() {
//     //     this.setState({
//     //         houses: res.data
//     //     })
//     // }

//     // componentDidMount() {
//     //     axios.get('/properties')
//     //     .then(res => {
//     //         //set all items to state
//     //         console.log(res.data)
//     //         console.log('dashboard mount', res.data)
//     //         // this.props.history.push('/dashboard');
//     //     }).catch(() => {
//     //         console.log('?!?!?')
//     //         sweetie({
//     //             title: 'Oh NOOO',
//     //             text: "AAAH!"
//     //             // timer: 1000,
//     //             // buttons: false
//     //         })
//     //         setTimeout(() => {
//     //         this.props.history.push('/');
//     //             }, 1000)
//     //     })
//     // }

//     render() {
//         let newHouseArray = this.state.houses.map((house, i) => {
//             return(
        
//             <div key={ house } >
//                 <div>
//                     <img className="prop-img" src="" alt=""/>
//                 </div>
//                 <div>
//                     <h1>Name</h1>
//                 </div>
//                 <div>
//                     <p>House information will go here</p>
//                     <h1>Loan: {house.loan}</h1>
//                     <h1>Monthly Mortage: </h1>
//                     <h1>Recommended Rent: </h1>
//                     <h1>Desired Rent:</h1>
//                     <h1>Addess:</h1>
//                     <h1>City: </h1>
//                 </div>
//                 <div>x</div>
//             </div>

//         )})
//         return(

//             { newHouseArray }
 
//          )}
//     }
    
//     export default Listings;