import React, { useState } from 'react';
import axios from 'axios';
import { read, utils } from 'xlsx'; 
import CONFIG from '../config/default';


const CreatePurchaseRequisitionFuntion = () => {
  const [formPurchaseRequestData, setFormPurchaseRequestData] = useState({
    ProductID: '',
    Department: '',
    OrderCompany: '',
    PurchaseRequisitionType: '',
    RequestedBy: '',
    SupportedBy: '',
    Customer: '',
    ProductName: '',
    Quantity: '',
    UnitPrice: '',
    IntoMonneyNoVAT: '',
    VAT: '',
    IntoMonney: '',
  });

  const handlePurchaseChange1 = (e) => {
    const { name, value } = e.target;
    setFormPurchaseRequestData({ ...formPurchaseRequestData, [name]: value });
  };

  const handleSubmitPurchaseRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:${CONFIG.PORTUSER}/purchase/request/postPurchaseRequest`,
        formPurchaseRequestData
      );

      if (response.status === 200) {
        console.log('New Request created successfully!');
        setFormPurchaseRequestData({
          ProductID: '',
          Department: '',
          OrderCompany: '',
          PurchaseRequisitionType: '',
          RequestedBy: '',
          SupportedBy: '',
          Customer: '',
          ProductName: '',
          Quantity: '',
          UnitPrice: '',
          IntoMonneyNoVAT: '',
          VAT: '',
          IntoMonney: '',
        });
      } else {
        console.error('Error creating new request:', response.statusText);
      }
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

      setFormPurchaseRequestData((prevData) => ({
        ...prevData,
        ...extractedData[0], 
      }));
    };

    reader.readAsArrayBuffer(file);
  };

  return {
    formPurchaseRequestData,
    handlePurchaseChange1,
    handleSubmitPurchaseRequest,
    handleFileUpload,
  };
};

export default CreatePurchaseRequisitionFuntion;
