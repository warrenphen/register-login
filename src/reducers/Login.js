const defaultState = {
    email: 'johndoe@example.com',
    password: '12345'
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_LOGIN_SUBMIT':
      return state
    default:
      return state
  }
}