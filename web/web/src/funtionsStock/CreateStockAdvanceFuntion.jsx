// CreateStockAdvanceFunction.jsx
import React, { useState } from 'react';
import axios from 'axios';
import CONFIG from '../config/default';
import { read, utils } from 'xlsx';

const CreateStockAdvanceFunction = () => {
    const [formData, setFormData] = useState({
        DocumentNo: '',
        SourceStoreCode: '',
        SourceStoreName: '',
        DestinationStoreCode: '',
        DestinationStoreName: '',
        Recipientant: '',
        Description: ''
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                `http://localhost:${CONFIG.PORTSTOCK}/stock/advantage/postStockAdvantage`, formData);
            console.log('New Request created successfully!');
            setFormData({
                DocumentNo: '',
                SourceStoreCode: '',
                SourceStoreName: '',
                DestinationStoreCode: '',
                DestinationStoreName: '',
                Recipientant: '',
                Description: ''
            });
        } catch (error) {
            if (error.response) {
                console.error('Error creating new request:', error.response.data.message);
            } else {
                console.error('Error creating new request:', error.message);
            }
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

            setFormData((prevData) => ({
                ...prevData,
                ...extractedData[0],
            }));
        };

        reader.readAsArrayBuffer(file);
    };

    return { formData, handleFormChange, handleSubmitForm, handleFileUpload };
};

export default CreateStockAdvanceFunction;
