import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Select } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      firstName: props.data.firstName,
      lastName: props.data.lastName,
      email: props.data.email,
      password: props.data.password,
      gender: props.data.gender,
      hasAgreed: props.data.hasAgreed,
    }
  }

  onSubmit = (event) => {
    this.props.registerSubmit(this.state);
    event.preventDefault();

    alert('Saved! (check redux tools)')
  }

  onChangeFirst = (event) => {this.setState({firstName: event.target.value})}
  onChangeLast = (event) => {this.setState({lastName: event.target.value})}
  onChangeEmail = (event) => {this.setState({email: event.target.value})}
  onChangePassword = (event) => {this.setState({password: event.target.value})}
  onChangeGender = (event) => {this.setState({gender: event.target.value})}
  onChangeHasAgreed = (event) => {this.setState({hasAgreed: event.target.value})}

  render() {
    const { firstName, lastName, email, password, gender, hasAgreed } = this.state;
    const { changeView } = this.props;

    return (
      <div style={{background: '#f8f8f9', height: '100vh'}}>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        
          <Grid.Column style={{ maxWidth: 450 }}>
          <Header> Register</Header>
          <Form onSubmit={this.onSubmit}>
            <Form.Group widths='equal'>
              <Form.Input value={firstName} onChange={this.onChangeFirst} fluid placeholder='First name' />
              <Form.Input value={lastName} onChange={this.onChangeLast} fluid placeholder='Last name' />
            </Form.Group>
            <Form.Input value={email} onChange={this.onChangeEmail} fluid placeholder='Email' />
            <Form.Input value={password} onChange={this.onChangePassword} type="password" fluid placeholder='New Password' />
            <Form.Field value={gender} onChange={this.onChangeGender} control={Select} options={options} placeholder='Gender' />
            <Form.Checkbox value={hasAgreed} label='I agree to the Terms and Conditions' />
            <Button color="teal" fluid type='submit'>Submit</Button>
          </Form>
            <Message>
              Already have an account? <a href='#' onClick={changeView}>Log In</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Register;
