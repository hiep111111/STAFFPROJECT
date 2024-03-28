import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Divider, Grid, Header, Icon, Input, Image, Label, Menu, Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import TopMenu from '../Constant/TopMenu.jsx';
import LeftMenu from "../Constant/HomeLefftMenu.jsx";
import "../css/App.css";
import "../css/fonts.css"


const Home = () => {
  const [dropdownMenuStyle, setDropdownMenuStyle] = useState({ display: "none" });

  const handleToggleDropdownMenu = () => {
    setDropdownMenuStyle(prevStyle => ({
      display: prevStyle.display === "none" ? "flex" : "none"
    }));
  };

  return (
    <div className="App">
      <TopMenu></TopMenu>
      <Grid padded>
        <LeftMenu></LeftMenu>
        <Grid.Column obile={16} tablet={13} computer={13} floated="right" id="content">
          <div className="table-container">
            <Grid.Row>
              <Grid.Column width={10}>
                <Header dividing size="medium" as="h2">
                </Header>
              </Grid.Column>
              <Grid.Row>
              </Grid.Row>
            </Grid.Row>
            <Divider section hidden />
            <Table singleLine striped selectable unstackable style={{ borderCollapse: 'collapse' }}>
              <Table.Header>
              </Table.Header>
              <Table.Body>
                <Grid.Row>
                </Grid.Row>
              </Table.Body>
            </Table>
          </div>
        </Grid.Column>

      </Grid>
    </div>
  );
};

export default Home;
