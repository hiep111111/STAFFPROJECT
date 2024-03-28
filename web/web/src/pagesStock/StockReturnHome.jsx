import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Checkbox, Divider, Grid, Header, Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import moment from 'moment';
import TopMenu from '../Constant/TopMenu.jsx';
import LeftMenu from '../Constant/StockLeftMenu.jsx';
import CONFIG from "../config/default.js";
import "../css/App.css";
import "../css/fonts.css";

const StockReturnHome = () => {
  const [purchaseRequest, setPurchaseRequest] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:${CONFIG.PORTSTOCK}/stock/return/getStockReturn`);
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

  const handleDeleteSelectedRows = async () => {
    try {
      const filteredOrders = purchaseRequest.filter((order, index) => !selectedRows.includes(index));
      setPurchaseRequest(filteredOrders);
      setSelectedRows([]);

      await Promise.all(selectedRows.map(async (index) => {
        const orderId = purchaseRequest[index]._id;
        await axios.delete(`http://localhost:1001/stock/return/deleteStockReturn/${orderId}`);
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
        <Grid.Column obile={16} tablet={13} computer={13} floated="right" id="content">
          <div className="table-container">
            <Grid.Row>
              <Header dividing size="medium" as="h2">
                Hoàn ứng vật tư
              </Header>
              <Link to='/stock/return/Create' >
                <button className="compact ui button" style={{ position: 'absolute', left: 20 }}> + </button>
              </Link>
            </Grid.Row>
            <Link >
              <button onClick={handleDeleteSelectedRows} disabled={selectedRows.length === 0} className="compact ui button" style={{ position: 'absolute', left: 65 }}>-</button>
            </Link>
            <Divider section hidden />
            <Table id="stockReturnTable" singleLine striped selectable unstackable style={{ borderCollapse: 'collapse' }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell >STT</Table.HeaderCell>
                  <Table.HeaderCell >.</Table.HeaderCell>
                  <Table.HeaderCell >Số ĐN hoàn ứng</Table.HeaderCell>
                  <Table.HeaderCell >Trạng thái</Table.HeaderCell>
                  <Table.HeaderCell >Ngày hoàn ứng</Table.HeaderCell>
                  <Table.HeaderCell >Người hoàn phiếu</Table.HeaderCell>
                  <Table.HeaderCell >Ngày tạo</Table.HeaderCell>
                  <Table.HeaderCell >Người tạo phiếu</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {purchaseRequest.map((request, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>
                      <Checkbox
                        checked={selectedRows.includes(index)}
                        onChange={() => handleRowCheckboxChange(index)}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Link to={`/stock/return/Detail/${request._id}`}>{request.StockReturnNumber}</Link>
                    </Table.Cell>
                    <Table.Cell>{request.State}</Table.Cell>
                    <Table.Cell>{moment(request.createdAt).format('DD/MM/YYYY')}</Table.Cell>
                    <Table.Cell>{request.ReturnByUserName}</Table.Cell>
                    <Table.Cell>{moment(request.createdAt).format('DD/MM/YYYY')}</Table.Cell>
                    <Table.Cell>{request.CreatedBy}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <ReactHTMLTableToExcel
              id="exportButton"
              className="compact ui button"
              table="stockReturnTable"
              filename="StockReturn"
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

export default StockReturnHome;
