import React, { useState } from 'react';
import axios from 'axios';
import "semantic-ui-css/semantic.min.css";
import "../css/App.css";
import "../css/fonts.css"
import CONFIG from '../config/default';
import { read, utils } from 'xlsx';

const CreateStockReturnFuntion = () => {
    const [formOrderRequestData, setFormOrderRequestData] = useState({
        StockReturnNumber: '',
        ReturnByUserName: '',
        CreatedBy: '',
        Description: ''
    })

    const handlePurchaseChange2 = (e) => {
        const { name, value } = e.target;
        setFormOrderRequestData({ ...formOrderRequestData, [name]: value });
    };

    const handleSubmitOrderRequest = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:${CONFIG.PORTSTOCK}/stock/return/postStockReturn`, formOrderRequestData);

            console.log('New stockAdvane created successfully!');

            setFormOrderRequestData({
                StockReturnNumber: '',
                ReturnByUserName: '',
                CreatedBy: '',
                Description: ''
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
    return { formOrderRequestData, handlePurchaseChange2, handleSubmitOrderRequest,handleFileUpload };

};

export default CreateStockReturnFuntion;
