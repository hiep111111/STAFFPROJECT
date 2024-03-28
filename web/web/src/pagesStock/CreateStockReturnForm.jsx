import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Divider, Grid, Header, Menu, Table, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css"
import CreateStockReturnFuntion from '../funtionsStock/CreateStockReturnFuntion.jsx';
import TopMenu from '../Constant/TopMenu.jsx';
import LeftMenu from '../Constant/StockLeftMenu.jsx';
import "../css/App.css";
import "../css/fonts.css"

const CreateStockReturnForm = () => {
    const { formOrderRequestData, handlePurchaseChange2, handleSubmitOrderRequest, handleFileUpload } = CreateStockReturnFuntion();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleSubmitOrderRequest(e);
            navigate('/stock/return');
        } catch (error) {
            console.error('Error handling submit:', error);
        }
    };

    return (
        <div className="App">
            <TopMenu></TopMenu>
            <Grid padded>
                <LeftMenu></LeftMenu>
                <Grid.Column mobile={16} tablet={13} computer={13} floated="right" id="content">
                    <div className="table-container">
                        <Grid.Row>
                            <Header dividing size="medium" as="h2">
                                TẠM ỨNG VẬT TƯ
                            </Header>
                        </Grid.Row>
                        <Divider section hidden />
                        <Table singleLine striped selectable unstackable style={{ borderCollapse: 'collapse' }}>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell colSpan={9}>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group widths='equal'>
                                                <Form.Field>
                                                    <label>Số ĐN hoàn ứng</label>
                                                    <input fluid label='StockReturnNumber' name='StockReturnNumber' value={formOrderRequestData.StockReturnNumber} onChange={handlePurchaseChange2} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Người hoàn ứng</label>
                                                    <input fluid label='ReturnByUserName' name='ReturnByUserName' value={formOrderRequestData.ReturnByUserName} onChange={handlePurchaseChange2} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>NGười tạo</label>
                                                    <input fluid label='CreatedBy' name='CreatedBy' value={formOrderRequestData.CreatedBy} onChange={handlePurchaseChange2} />
                                                </Form.Field>
                                            </Form.Group>
                                            <Form.Group widths='equal'>
                                                <Form.Field>
                                                    <label>Mô tả</label>
                                                    <input fluid label='Description' name='Description' value={formOrderRequestData.Description} onChange={handlePurchaseChange2} />
                                                </Form.Field>
                                            </Form.Group>
                                            <Form.Field>
                                                <label>Upload Excel File</label>
                                                <input type="file" onChange={handleFileUpload} accept=".xlsx, .xls" />
                                            </Form.Field>
                                            <Button type='submit'>gửi đi</Button>
                                        </Form>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default CreateStockReturnForm;
