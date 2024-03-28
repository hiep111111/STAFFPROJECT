import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Divider, Grid, Header, Menu, Table, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css"
import CreateOrderRequisitionFuntion from '../funtionsPurchase/CreateOderRequisitionFuntion.jsx'
import TopMenu from '../Constant/TopMenu.jsx';
import LeftMenu from '../Constant/PurchaseLeftMenu.jsx';
import "../css/App.css";
import "../css/fonts.css"
import CreatePurchaseRequisitionFunction from '../funtionsPurchase/CreatePurchaseRequisitionFuntion.jsx';

const CreatePurchaseRequisition = () => {
    const navigate = useNavigate();
    const {
        formPurchaseRequestData,
        handlePurchaseChange1,
        handleSubmitPurchaseRequest,
        handleFileUpload,
    } = CreatePurchaseRequisitionFunction();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleSubmitPurchaseRequest(e);
            navigate('/purchase/purchase');
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
                                Yêu cầu mua hàng
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
                                                    <label>ID Sản phẩm</label>
                                                    <input fluid='true' label='Product ID' name='ProductID' value={formPurchaseRequestData.ProductID} onChange={handlePurchaseChange1} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Bộ Phận</label>
                                                    <input fluid label='Department' name='Department' value={formPurchaseRequestData.Department} onChange={handlePurchaseChange1} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Công ty đặt hàng</label>
                                                    <input fluid label='orderCompany' name='OrderCompany' value={formPurchaseRequestData.OrderCompany} onChange={handlePurchaseChange1} />
                                                </Form.Field>
                                            </Form.Group>
                                            <Form.Group widths='equal'>
                                                <Form.Field>
                                                    <label>Loại Yêu Cầu Mua Hàng</label>
                                                    <input fluid label='PurchaseRequisition Type' name='PurchaseRequisitionType' value={formPurchaseRequestData.PurchaseRequisitionType} onChange={handlePurchaseChange1} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Người Yêu Cầu</label>
                                                    <input fluid label='Requested By' name='RequestedBy' value={formPurchaseRequestData.RequestedBy} onChange={handlePurchaseChange1} />
                                                </Form.Field>
                                            </Form.Group>
                                            <Form.Group widths='equal'>
                                                <Form.Field>
                                                    <label>Người Hỗ Trợ</label>
                                                    <input fluid label='SupportedBy' name='SupportedBy' value={formPurchaseRequestData.SupportedBy} onChange={handlePurchaseChange1} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Khách hàng</label>
                                                    <input fluid label='Customer' name='Customer' value={formPurchaseRequestData.Customer} onChange={handlePurchaseChange1} />
                                                </Form.Field>
                                            </Form.Group>
                                            <Table.Row>
                                                <Table.Cell colSpan={9}>
                                                    <Form.Group widths='equal'>
                                                        <Form.Field>
                                                            <label>Tên sản phẩm</label>
                                                            <input fluid label='ProductName' name='ProductName' value={formPurchaseRequestData.ProductName} onChange={handlePurchaseChange1} />
                                                        </Form.Field>
                                                    </Form.Group>
                                                    <Form.Group widths='equal'>
                                                        <Form.Field>
                                                            <label>Số lượng</label>
                                                            <input fluid label='Quantity' name='Quantity' value={formPurchaseRequestData.Quantity} onChange={handlePurchaseChange1} />
                                                        </Form.Field>
                                                        <Form.Field>
                                                            <label>Đơn giá</label>
                                                            <input fluid label='UnitPrice' name='UnitPrice' value={formPurchaseRequestData.UnitPrice} onChange={handlePurchaseChange1} />
                                                        </Form.Field>
                                                    </Form.Group>
                                                    <Form.Group widths='equal'>
                                                        <Form.Field>
                                                            <label>Thành tiền(chưa VAT)</label>
                                                            <input fluid label='IntoMonneyNoVAT' name='IntoMonneyNoVAT' value={formPurchaseRequestData.IntoMonneyNoVAT} onChange={handlePurchaseChange1} />
                                                        </Form.Field>
                                                    </Form.Group>
                                                    <Form.Group widths='equal'>
                                                        <Form.Field>
                                                            <label>VAT</label>
                                                            <input fluid label='VAT' name='VAT' value={formPurchaseRequestData.VAT} onChange={handlePurchaseChange1} />
                                                        </Form.Field>
                                                        <Form.Field>
                                                            <label>Thành tiền</label>
                                                            <input fluid label='IntoMonney' name='IntoMonney' value={formPurchaseRequestData.IntoMonney} onChange={handlePurchaseChange1} />
                                                        </Form.Field>
                                                    </Form.Group>
                                                    <Form.Field>
                                                        <label> Excel File</label>
                                                        <input type="file" onChange={handleFileUpload} accept=".xlsx, .xls" />
                                                    </Form.Field>
                                                    <Button type='submit'>gửi đi</Button>
                                                </Table.Cell>
                                            </Table.Row>
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

export default CreatePurchaseRequisition;
