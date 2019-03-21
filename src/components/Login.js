import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      email: props.data.email,
      password: props.data.password,
    }
  }

  onSubmit = (event) => {
    this.props.loginSubmit(this.state);
    event.preventDefault();

    alert('Saved! (check redux tools)')
  }

  onChangeEmail = (event) => {this.setState({email: event.target.value})}
  onChangePassword = (event) => {this.setState({password: event.target.value})}

  render() {
    // const { email: defaultEmail, password: defaultPassword } = this.props.data;
    const { email, password } = this.state;
    const { changeView } = this.props;

    return (
      <div className="App"  style={{background: '#f8f8f9', height: '100vh'}}>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
          <Header>Login</Header>
            <Form onSubmit={this.onSubmit} size='large'>
              <Segment stacked>
                <Form.Input value={email} onChange={this.onChangeEmail} fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                  value={password}
                  onChange={this.onChangePassword}
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button type="submit" color='teal' fluid size='large'>
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
