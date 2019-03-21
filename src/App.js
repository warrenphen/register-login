import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import Login from './components/Login';
import Register from './components/Register';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

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

    if (display === 'login'){
      return <Login changeView={this.changeView}/>;
    } else if (display === 'register') {
      return <Register changeView={this.changeView}/>;
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

export default App;
