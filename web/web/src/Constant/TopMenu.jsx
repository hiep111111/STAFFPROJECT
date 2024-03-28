import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'; 
import { Button, Checkbox, Divider, Grid, Header, Icon, Input, Image, Label, Menu, Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../css/App.css";
import "../css/fonts.css";
import CONFIG from "../config/default.js"; 

const TopMenu = () => {
  return (
    <Grid padded className="">
    <Menu borderless inverted fluid fixed="top">
        <Menu.Menu position="left">
            <Menu.Item header style={{ width: "12%", display: "flex" }}></Menu.Item>
            <Link to = '/purchase'>
            <Menu.Item header as="a" style={{ borderLeft: "2px solid white", borderRight: "2px solid white", padding: "12px", width: "100%", display: "flex", justifyContent: "center" }}>USER</Menu.Item>
            </Link>
        </Menu.Menu>
        <Menu.Menu position="right">
            <Link to='/purchase'>
                <Menu.Item as="a">DV Hàng Hóa</Menu.Item>
            </Link>
            <Link to='/stock'>
                <Menu.Item as="a">Kho hàng</Menu.Item>
            </Link>
            <Link to='/Profile'>
                <Menu.Item as="a">Profile</Menu.Item>
            </Link>
            <Link to='/Help'>
                <Menu.Item as="a">Help</Menu.Item>
            </Link>
        </Menu.Menu>
    </Menu>
</Grid>
  );
};

export default TopMenu;
