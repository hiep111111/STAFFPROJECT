import React, { useState } from 'react';
import axios from 'axios';
import "semantic-ui-css/semantic.min.css";
import "../css/App.css";
import "../css/fonts.css"
import CONFIG from '../config/default';
import { read, utils } from 'xlsx';


const CreateOrderRequisitionFuntion = () => {
    const [formOrderRequestData, setFormOrderRequestData] = useState({
        ProductID: '',
        Department: '',
        OrderCompany: '',
        Supplier: '',
        ProductType: '',
        RequestedBy: '',
        SupportedBy: '',
        Customer: '',
        ProductName: '',
        Quantity: '',
        UnitPrice: '',
        IntoMonneyNoVAT: '',
        VAT: '',
        IntoMonney: ''
    })

    const handlePurchaseChange2 = (e) => {
        const { name, value } = e.target;
        setFormOrderRequestData({ ...formOrderRequestData, [name]: value });
    };

    const handleSubmitOrderRequest = async (e) => {
        try {
            await axios.post(`http://localhost:${CONFIG.PORTUSER}/purchase/order/postPurchaseOrder`, formOrderRequestData);

            console.log('New Order created successfully!');

            setFormOrderRequestData({
                ProductID: '',
                Department: '',
                OrderCompany: '',
                Supplier: '',
                ProductType: '',
                RequestedBy: '',
                SupportedBy: '',
                Customer: '',
                ProductName: '',
                Quantity: '',
                UnitPrice: '',
                IntoMonneyNoVAT: '',
                VAT: '',
                IntoMonney: ''
            });
        } catch (error) {
            console.error('Error creating new request:', error);
        }
    };
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = read(data, { type: 'array' });

            const sheet = workbook.Sheets['Sheet1'];

            const extractedData = utils.sheet_to_json(sheet);

            setFormOrderRequestData((prevData) => ({
                ...prevData,
                ...extractedData[0],
            }));
        };

        reader.readAsArrayBuffer(file);
    };
    return { formOrderRequestData, handlePurchaseChange2, handleSubmitOrderRequest, handleFileUpload };

};

export default CreateOrderRequisitionFuntion;
