
let initialState = {
  name: '',
  info: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  image: '',
  loan_amount: 0,
  mortgage: 0,
  rec_rent: 0,
  des_rent: 0,
  user: {}

}

//const variables
const GET_USER = "GET_USER";


export default function reducer(state=initialState, action) {
    switch(action.type) {
      case GET_USER:
        return Object.assign({}, state, { user: action.payload })

        default:
        return state;
   }
}

//action creators
export const getUser = user => {
  return {
    type: GET_USER,
    payload: user
  }
}

//export function {
//     return {
//         type:
//     }
// }