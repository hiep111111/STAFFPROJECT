import React, { useState } from "react";
import { Form, Input, Button, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import CONFIG from '../authconfigs/default';

const Login = () => {
  const navigate = useNavigate(); 
  const [loginData, setLoginData] = useState({
      Username: '', 
      Password: ''
  });
  const [loginResult, setLoginResult] = useState(null);

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setLoginData({ ...loginData, [name]: value });
  }; 

  const handleSubmitLogin = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post(
              `http://localhost:${CONFIG.PORTACCOUNT}/Auth/Login`,
              loginData
          );

          if (response.status === 200) {
              localStorage.setItem('isLoggedIn', true);
              localStorage.setItem('username', loginData.Username);
              navigate('/purchase');
          } else {
              setLoginResult('error Login');
          }
      } catch (error) {
          console.error('Error logging in:', error.message);
          setLoginResult('error');
      }
  };
  
  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <Form className="ui form" onSubmit={handleSubmitLogin}>
          <div className="ui segment">
            <h1><i className="connectdevelop icon"></i></h1>
            <h2>Log in to App</h2>
            <div className="ui center aligned basic segment">
              <Form.Field>
                <label>Username</label>
                <input placeholder='Username' name='Username' value={loginData.Username} onChange={handleInputChange} />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' name='Password' type='password' value={loginData.Password} onChange={handleInputChange} />
              </Form.Field>

              <Button primary fluid type="submit">Log In</Button>
            </div>
            <Divider />
          </div>
          <div className="ui segment">
            Not registered yet? <a href="/signup">Sign Up</a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
