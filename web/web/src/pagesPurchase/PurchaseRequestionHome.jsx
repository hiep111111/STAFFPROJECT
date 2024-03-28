import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Checkbox, Divider, Grid, Header, Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import moment from 'moment';
import TopMenu from '../Constant/TopMenu.jsx';
import LeftMenu from '../Constant/PurchaseLeftMenu.jsx';
import CONFIG from "../config/default.js";
import "../css/App.css";
import "../css/fonts.css";

const PurchaseRequestion = () => {
  const [purchaseRequest, setPurchaseRequest] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:${CONFIG.PORTUSER}/purchase/request/getPurchaseRequest`);
        setPurchaseRequest(response.data);
      } catch (error) {
        console.error('Error fetching purchase request:', error);
      }
    };

    fetchData();
  }, []);

  const handleRowCheckboxChange = (index) => {
    const updatedSelectedRows = [...selectedRows];
    if (updatedSelectedRows.includes(index)) {
      updatedSelectedRows.splice(updatedSelectedRows.indexOf(index), 1);
    } else {
      updatedSelectedRows.push(index);
    }
    setSelectedRows(updatedSelectedRows);
  };

  const handleSelectAllClick = () => {
    if (selectedRows.length === purchaseRequest.length) {
      setSelectedRows([]);
    } else {
      const newSelectedRows = Array.from({ length: purchaseRequest.length }, (_, index) => index);
      setSelectedRows(newSelectedRows);
    }
  };

  const handleDeleteSelectedRows = async () => {
    try {
      const filteredOrders = purchaseRequest.filter((order, index) => !selectedRows.includes(index));
      setPurchaseRequest(filteredOrders);
      setSelectedRows([]);

      await Promise.all(selectedRows.map(async (index) => {
        const orderId = purchaseRequest[index]._id;
        await axios.delete(`http://localhost:${CONFIG.PORTUSER}/purchase/request/deletePurchaseRequest/${orderId}`);
      }));
    } catch (error) {
      console.error('Error deleting selected rows:', error);
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
              <Link to='/purchase/purchase/Create' >
                <button className="compact ui button" style={{ position: 'absolute', left: 20 }}> + </button>
              </Link>
            </Grid.Row>
            <Link>
              <button onClick={handleDeleteSelectedRows} disabled={selectedRows.length === 0} className="compact ui button" style={{ position: 'absolute', left: 65 }}>-</button>
            </Link>
            <Divider section hidden />
            <Table id="purchaseRequestTable" singleLine striped unstackable style={{ borderCollapse: 'collapse' }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    <Checkbox
                      indeterminate={selectedRows.length > 0 && selectedRows.length < purchaseRequest.length}
                      checked={selectedRows.length === purchaseRequest.length}
                      onChange={handleSelectAllClick}
                    />
                  </Table.HeaderCell>
                  <Table.HeaderCell > STT </Table.HeaderCell>
                  <Table.HeaderCell > Mã Sản phẩm </Table.HeaderCell>
                  <Table.HeaderCell > Bộ phận</Table.HeaderCell>
                  <Table.HeaderCell > Công ty đặt hàng </Table.HeaderCell>
                  <Table.HeaderCell > Loại Yêu Cầu Mua Hàng </Table.HeaderCell>
                  <Table.HeaderCell > Người Yêu Cầu </Table.HeaderCell>
                  <Table.HeaderCell > Người Hỗ Trợ </Table.HeaderCell>
                  <Table.HeaderCell > Khách hàng </Table.HeaderCell>
                  <Table.HeaderCell > Trạng thái </Table.HeaderCell>
                  <Table.HeaderCell > Ngày tạo </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {purchaseRequest.map((request, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>
                      <Checkbox
                        checked={selectedRows.includes(index)}
                        onChange={() => handleRowCheckboxChange(index)}
                      />
                    </Table.Cell>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>
                      <Link to={`/purchase/purchase/Detail/${request._id}`}>{request.ProductID}</Link>
                    </Table.Cell>
                    <Table.Cell>{request.Department}</Table.Cell>
                    <Table.Cell>{request.orderCompany}</Table.Cell>
                    <Table.Cell>{request.PurchaseRequisitionType}</Table.Cell>
                    <Table.Cell>{request.RequestedBy}</Table.Cell>
                    <Table.Cell>{request.SupportedBy}</Table.Cell>
                    <Table.Cell>{request.Customer}</Table.Cell>
                    <Table.Cell>{request.State}</Table.Cell>
                    <Table.Cell>{moment(request.createdAt).format('DD/MM/YYYY')}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <ReactHTMLTableToExcel
              id="exportButton"
              className="compact ui button"
              table="purchaseRequestTable"
              filename="PurchaseRequest"
              sheet="Sheet"
              buttonText="Xuất Excel"
              excludeColumns="0" 
            />
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default PurchaseRequestion;
