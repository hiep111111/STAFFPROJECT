import React from 'react';
import { Form, Button, Divider, Grid, Header, Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import CreateStockAdvanceFunction from '../funtionsStock/CreateStockAdvanceFuntion.jsx';
import TopMenu from '../Constant/TopMenu.jsx';
import LeftMenu from '../Constant/StockLeftMenu.jsx';
import { useNavigate } from 'react-router-dom';
import "../css/App.css";
import "../css/fonts.css";

const CreateStockAdvantageForm = () => {
    const { formData, handleFormChange, handleSubmitForm, handleFileUpload } = CreateStockAdvanceFunction();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleSubmitForm(e);
            navigate('/stock/advantage');
        } catch (error) {
            console.error('Error handling submit:', error);
        }
    };

    return (
        <div className="App">
            <TopMenu />
            <Grid padded>
                <LeftMenu />
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
                                                    <label>Số chứng từ</label>
                                                    <input fluid label='DocumentNo' name='DocumentNo' value={formData.DocumentNo} onChange={handleFormChange} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Mã kho nguồn</label>
                                                    <input fluid label='SourceStoreCode' name='SourceStoreCode' value={formData.SourceStoreCode} onChange={handleFormChange} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Tên kho nguồn</label>
                                                    <input fluid label='SourceStoreName' name='SourceStoreName' value={formData.SourceStoreName} onChange={handleFormChange} />
                                                </Form.Field>
                                            </Form.Group>
                                            <Form.Group widths='equal'>
                                                <Form.Field>
                                                    <label>Mã kho đích</label>
                                                    <input fluid label='DestinationStoreCode' name='DestinationStoreCode' value={formData.DestinationStoreCode} onChange={handleFormChange} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Tên kho đích</label>
                                                    <input fluid label='DestinationStoreName' name='DestinationStoreName' value={formData.DestinationStoreName} onChange={handleFormChange} />
                                                </Form.Field>
                                            </Form.Group>
                                            <Form.Group widths='equal'>
                                                <Form.Field>
                                                    <label>Người nhận tạm ứng</label>
                                                    <input fluid label='Recipientant' name='Recipientant' value={formData.Recipientant} onChange={handleFormChange} />
                                                </Form.Field>
                                            </Form.Group>
                                            <Form.Group widths='equal'>
                                                <Form.Field>
                                                    <label>Mô tả</label>
                                                    <input fluid label='Description' name='Description' value={formData.Description} onChange={handleFormChange} />
                                                </Form.Field>
                                                <Form.Field>
                                                        <label>Upload Excel File</label>
                                                        <input type="file" onChange={handleFileUpload} accept=".xlsx, .xls" />
                                                    </Form.Field>
                                            </Form.Group>
                                            <Button type='submit'>Gửi đi</Button>
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

export default CreateStockAdvantageForm;
