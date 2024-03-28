import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button, Checkbox, Divider, Grid, Header, Icon, Input, Image, Label, Menu, Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import CONFIG from "../config/default.js";
import "../css/App.css";
import "../css/fonts.css";

const LeftMenu = () => {
    return (
        <Grid.Column computer={3} only="tablet computer" id="sidebar">
            <Menu vertical borderless fluid text>
                <Header  style={{ fontFamily: 'PTSerif-BoldItalic' }}> Đặt hàng </Header>
                <Link to='/purchase/purchase'>
                    <Menu.Item as="a"> Yêu cầu mua hàng </Menu.Item>
                </Link>
                <Link to='/purchase/order'>
                    <Menu.Item as="a">Yêu cầu đặt hàng</Menu.Item>
                </Link>
            </Menu>
        </Grid.Column>
    );
};

export default LeftMenu;
