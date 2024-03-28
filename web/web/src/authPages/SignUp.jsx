import React from "react";
import { Form, Input, Button, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import CreateUserFunction from "../authfuntions/CreateUser.jsx"; 
import "../authcss/AppLogin.css";
import "../authcss/fontsLogin.css";

const SignUp = () => {
  const { formNewUser, handleInputChange, handleSubmitNewUser } = CreateUserFunction(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmitNewUser(e);
    } catch (error) {
      console.error('Error handling submit:', error);
    }
  };

  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <Form className="ui form" onSubmit={handleSubmit}>
          <div className="ui segment">
            <h1><i className="connectdevelop icon"></i></h1>
            <h2>Sign up to App</h2>
            <div className="ui center aligned basic segment">
              <Form.Field>
                <label>Email</label>
                <input placeholder='Email' name='Email' value={formNewUser.Email} onChange={handleInputChange} />
              </Form.Field>
              <Form.Field>
                <label>Username</label>
                <input placeholder='Username' name='Username' value={formNewUser.Username} onChange={handleInputChange} /> 
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' name='Password' type='password'  value={formNewUser.Password} onChange={handleInputChange} /> 
              </Form.Field>
              <Button primary fluid type="submit">Sign Up</Button> 
            </div>
            <Divider />
          </div>
          <div className="ui segment">
            here? <a href="/login">Login </a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
