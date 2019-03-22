const defaultState = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    password: '',
    gender: 'male',
    hasAgreed: false,
}

export default (state = defaultState, action) => {
    switch (action.type) {
      case 'SET_REGISTER_SUBMIT':
        return { 
          ...state, 
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          password: action.payload.password,
          gender: action.payload.gender,
          hasAgreed: action.payload.hasAgreed,
        }
      default:
        return state
    }
  }