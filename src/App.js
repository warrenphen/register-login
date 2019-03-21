import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux'

import Login from './components/Login';
import Register from './components/Register';

import { loginSubmit } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      display: 'login'
    };
  }

  changeView = () => {
    let { display } = this.state;
    
    this.setState({display: (display === 'login') ? 'register' : 'login'})
  }

  renderView() {
    const { display } = this.state;
    const { Login: login, Register: register, loginSubmit } = this.props;

    if (display === 'login'){
      return <Login data={login} loginSubmit={loginSubmit} changeView={this.changeView}/>;
    } else if (display === 'register') {
      return <Register data={register} changeView={this.changeView}/>;
    }
  }

  render() {
    const renderedView = this.renderView();

    return (
      <div className="App"  style={{background: '#f8f8f9', height: '100vh'}}>
        {renderedView}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

const mapDispatchToProps = dispatch => ({
  loginSubmit: (payload) => dispatch(loginSubmit(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)