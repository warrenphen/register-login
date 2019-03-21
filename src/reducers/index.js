let defaultState = {

}

const todos = (state = [], action) => {
    switch (action.type) {
      case 'SET_LOGIN_SUBMIT':
       return {}
      case 'SET_REGISTER_SUBMIT':
        return {}
      default:
        return state
    }
  }
  
  export default todos