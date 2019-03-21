import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

class Login extends Component {
  constructor(props) {
    super(props);

    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  onSubmit = () => {
    
  }

  render() {
    const { email, password } = this.props.data;
    const { changeView } = this.props;

    return (
      <div className="App"  style={{background: '#f8f8f9', height: '100vh'}}>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
          <Header>Login</Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input ref={this.emailInput} defaultValue={email} fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                  ref={this.passwordInput}
                  defaultValue={password}
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button onClick={this.onSubmit} color='teal' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href='#' onClick={changeView}>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
