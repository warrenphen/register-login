const defaultState = {
    firstName: 'John',
    lastName: 'Doe',
    password: '',
    email: 'johndoe@example.com',
    gender: 'male',
    hasAgreed: false,
}

export default (state = defaultState, action) => {
    switch (action.type) {
      case 'SET_REGISTER_SUBMIT':
        return Object.assign({}, state, {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          password: action.payload.password,
          email: action.payload.email,
          gender: action.payload.password,
          hasAgreed: action.payload.hasAgreed,
      })
      default:
        return state
    }
  }