
let initialState = {
  name: '',
  info: '',
  address: '',
  city: '',
  c_state: '',
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
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_INFO = "UPDATE_INFO";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMAGE = "UPDATE_IMAGE";
const UPDATE_LOAN = "UPDATE_LOAN";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RECRENT = "UPDATE_RECRENT";
const UPDATE_DESRENT = "UPDATE_DESRENT";


export default function reducer(state=initialState, action) {
    switch(action.type) {
      case GET_USER:
        // console.log('reducer switch statement', action.payload)
        return Object.assign({}, state, { user: action.payload })
      case UPDATE_NAME:
        return Object.assign({}, state, { name: action.payload })
      case UPDATE_INFO:
        return Object.assign({}, state, { info: action.payload })
      case UPDATE_ADDRESS:
        return Object.assign({}, state, { addess: action.payload })
      case UPDATE_CITY:
        return Object.assign({}, state, { city: action.payload })
      case UPDATE_STATE:
        return Object.assign({}, state, { c_state: action.payload })
      case UPDATE_ZIP:
        return Object.assign({}, state, { zipcode: action.payload })
      case UPDATE_IMAGE:
        return Object.assign({}, state, { image: action.payload })
      case UPDATE_LOAN:
        return Object.assign({}, state, { loan_amount: action.payload })
      case UPDATE_MORTGAGE:
        return Object.assign({}, state, { mortgage: action.payload })
      case UPDATE_RECRENT:
        return Object.assign({}, state, { rec_rent: action.payload })
      case UPDATE_DESRENT:
        return Object.assign({}, state, { des_rent: action.payload })

      default: return state;
   }
}

//action creators
export const getUser = user => {
  return {
    type: GET_USER,
    payload: user
  }
}

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  }
}

export function updateInfo(info) {
  return {
    type: UPDATE_INFO,
    payload: info
  }
}

export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  }
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  }
}

export function updateState(c_state) {
  return {
    type: UPDATE_STATE,
    payload: c_state
  }
}

export function updateZip(zipcode) {
  return {
    type: UPDATE_ZIP,
    payload: zipcode
  }
}

export function updateImage(image) {
  return {
    type: UPDATE_IMAGE,
    payload: image
  }
}

export function updateLoan(loan_amount) {
  return {
    type: UPDATE_LOAN,
    payload: loan_amount
  }
}

export function updateMortgage(mortgage) {
  return {
    type: UPDATE_MORTGAGE,
    payload: mortgage
  }
}

export function updateRecRent(rec_rent) {
  return {
    type: UPDATE_RECRENT,
    payload: rec_rent
  }
}

export function updateDesRent(des_rent) {
  return {
    type: UPDATE_DESRENT,
    payload: des_rent
  }
}
