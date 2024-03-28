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

const CreateOrderRequisitionForm = () => {
    const navigate = useNavigate();
    const { formOrderRequestData, handlePurchaseChange2, handleSubmitOrderRequest, handleFileUpload } = CreateOrderRequisitionFuntion();
    const calculateSubtotalNoVAT = () => {
        return formOrderRequestData.Quantity * formOrderRequestData.UnitPrice;
    };

    // Tính toán Thành tiền
    const calculateTotal = () => {
        const subtotalNoVAT = calculateSubtotalNoVAT();
        const VATAmount = (subtotalNoVAT * formOrderRequestData.VAT) ;
        return  VATAmount;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const subtotalNoVAT = calculateSubtotalNoVAT();
            const total = calculateTotal();
            const dataToSend = {
                ...formOrderRequestData,
                IntoMonneyNoVAT: subtotalNoVAT,
                IntoMonney: total
            };
            await handleSubmitOrderRequest(dataToSend);
            navigate('/purchase/order');
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
                                Yêu cầu đặt hàng
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
                                                    <label>ID sản phẩm</label>
                                                    <input fluid label='ProductID' name='ProductID' value={formOrderRequestData.ProductID} onChange={handlePurchaseChange2} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Bộ Phận</label>
                                                    <input fluid label='Department' name='Department' value={formOrderRequestData.Department} onChange={handlePurchaseChange2} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Công ty đặt hàng</label>
                                                    <input fluid label='OrderCompany' name='OrderCompany' value={formOrderRequestData.OrderCompany} onChange={handlePurchaseChange2} />
                                                </Form.Field>
                                            </Form.Group>
                                            <Form.Group widths='equal'>
                                                <Form.Field>
                                                    <label>Loại sản phẩm</label>
                                                    <input fluid label='ProductType' name='ProductType' value={formOrderRequestData.ProductType} onChange={handlePurchaseChange2} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Nhà cung cấp</label>
                                                    <input fluid label='Supplier' name='Supplier' value={formOrderRequestData.Supplier} onChange={handlePurchaseChange2} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Người Yêu Cầu</label>
                                                    <input fluid label='RequestedBy Type' name='RequestedBy' value={formOrderRequestData.RequestedBy} onChange={handlePurchaseChange2} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Người Hỗ Trợ</label>
                                                    <input fluid label='SupportedBy' name='SupportedBy' value={formOrderRequestData.SupportedBy} onChange={handlePurchaseChange2} />
                                                </Form.Field>
                                            </Form.Group>
                                            <Form.Group widths='equal'>
                                                <Form.Field>
                                                    <label>Khách hàng</label>
                                                    <input fluid label='Customer' name='Customer' value={formOrderRequestData.Customer} onChange={handlePurchaseChange2} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Tên sản phẩm</label>
                                                    <input fluid label='ProductName' name='ProductName' value={formOrderRequestData.ProductName} onChange={handlePurchaseChange2} />
                                                </Form.Field>
                                            </Form.Group>
                                            <Table.Row>
                                                <Table.Cell colSpan={9}>
                                                    <Form.Group widths='equal'>
                                                        <Form.Field>
                                                            <label>số lượng</label>
                                                            <input fluid label='Quantity' name='Quantity' value={formOrderRequestData.Quantity} onChange={handlePurchaseChange2} />
                                                        </Form.Field>
                                                    </Form.Group>
                                                    <Form.Group widths='equal'>
                                                        <Form.Field>
                                                            <label>Đơn giá</label>
                                                            <input fluid label='UnitPrice' name='UnitPrice' value={formOrderRequestData.UnitPrice} onChange={handlePurchaseChange2} />
                                                        </Form.Field>
                                                    </Form.Group>
                                                    <Form.Group widths='equal'>
                                                        <Form.Field>
                                                            <label>Thành tiền(chưa VAT)</label>
                                                            <input fluid label='IntoMonneyNoVAT' name='IntoMonneyNoVAT' value={calculateSubtotalNoVAT()} disabled />
                                                        </Form.Field>
                                                        <Form.Field>
                                                            <label> VAT </label>
                                                            <input fluid label='VAT' name='VAT' value={formOrderRequestData.VAT} onChange={handlePurchaseChange2} />
                                                        </Form.Field>
                                                    </Form.Group>
                                                    <Form.Group widths='equal'>
                                                        <Form.Field>
                                                            <label>Thành tiền</label>
                                                            <input fluid label='IntoMonney' name='IntoMonney' value={calculateTotal()} disabled />
                                                        </Form.Field>
                                                    </Form.Group>
                                                    <Form.Field>
                                                        <label>Upload Excel File</label>
                                                        <input type="file" onChange={handleFileUpload} accept=".xlsx, .xls" />
                                                    </Form.Field>
                                                    <Button type='submit'>Gửi đi</Button>
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

export default CreateOrderRequisitionForm;
