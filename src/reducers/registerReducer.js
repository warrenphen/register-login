const defaultState = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    gender: 'male',
    hasAgreed: false,
}

const registerReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'SET_REGISTER_SUBMIT':
        return {}
      default:
        return state
    }
  }
  
  export default registerReducer;