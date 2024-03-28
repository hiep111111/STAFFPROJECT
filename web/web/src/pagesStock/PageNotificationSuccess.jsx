import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header, Menu, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import TopMenu from '../Constant/TopMenu.jsx';
import LeftMenu from '../Constant/LeftMenu.jsx';
import "../css/App.css";
import "../css/fonts.css";

const SuccessPageNotification = () => {
    return (
        <div className="App">
            <TopMenu></TopMenu>
            <Grid padded>
                <LeftMenu></LeftMenu>
                <Grid.Column mobile={16} tablet={13} computer={13} floated="right" id="content">
                    <div className="table-container">
                        <Grid.Row>
                        </Grid.Row>
                        <Divider section hidden />
                        <Grid.Row>
                            <Header dividing size="medium" as="h2" textAlign='center'>
                                Tạo yêu cầu thành công
                            </Header>
                        </Grid.Row>
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default SuccessPageNotification;
