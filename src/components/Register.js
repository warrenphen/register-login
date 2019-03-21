import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Select } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class Register extends Component {
  render() {
      
    return (
      <div style={{background: '#f8f8f9', height: '100vh'}}>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        
          <Grid.Column style={{ maxWidth: 450 }}>
          <Header> Register</Header>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input fluid placeholder='First name' />
              <Form.Input fluid placeholder='Last name' />
            </Form.Group>
            <Form.Input fluid placeholder='Mobile Number or email' />
            <Form.Input fluid placeholder='New Password' />
            <Form.Field control={Select} options={options} placeholder='Gender' />
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Button color="teal" fluid type='submit'>Submit</Button>
          </Form>
            <Message>
              Already have an account? <a href='#' onClick={this.props.changeView}>Log In</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Register;
