import React, { useState, useEffect } from "react";
import {  Form, Grid, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import TopMenu from "../Constant/TopMenu.jsx";
import LeftMenu from "../Constant/HomeLefftMenu.jsx";
import "../css/App.css";
import "../css/fonts.css";
import CONFIG from "../config/default.js";

const Profile = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const username = localStorage.getItem("username");

  const [email, setEmail] = useState("");

  useEffect(() => {
    getEmailByUsername(username);
  }, [username]);

  const getEmailByUsername = async (username) => {
    try {
      const response = await fetch(`http://localhost:${CONFIG.PORTACCOUNT}/Auth/getStaff`);
      if (response.ok) {
        const data = await response.json();
        const user = data.find(user => user.Username === username);
        if (user) {
          const { Email } = user;
          setEmail(Email);
          console.log("Email:", Email); 
        } else {
          console.error("User not found");
          setEmail("N/A"); 
        }
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  
  

  return (
    <div>
      <TopMenu />
      <Grid padded>
        <LeftMenu />
        <Grid.Column mobile={16} tablet={13} computer={13} floated="right" id="content">
          <div className="table-container">
            <Grid.Row>
              <Header dividing size="medium" as="h2">
                Thông tin người dùng
              </Header>
              <Form>
                <Form.Group widths="equal">
                  <Form.Field>
                    <label>Username</label>
                    <input value={username} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Email</label>
                    <input value={email} readOnly />
                  </Form.Field>
                </Form.Group>
              </Form>
            </Grid.Row>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Profile;
