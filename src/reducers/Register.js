const defaultState = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    gender: 'male',
    hasAgreed: false,
}

export default (state = defaultState, action) => {
    switch (action.type) {
      case 'SET_REGISTER_SUBMIT':
        return {}
      default:
        return state
    }
  }