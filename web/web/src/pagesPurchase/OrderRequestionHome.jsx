import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Button, Checkbox, Divider, Grid, Header, Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import TopMenu from '../Constant/TopMenu.jsx';
import LeftMenu from '../Constant/PurchaseLeftMenu.jsx';
import CONFIG from "../config/default.js";
import moment from 'moment';
import "../css/App.css";
import "../css/fonts.css";

const OrderRequestion = () => {
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:${CONFIG.PORTUSER}/purchase/order/getPurchaseOrder`);
        setPurchaseOrders(response.data);
      } catch (error) {
        console.error('Error fetching purchase orders:', error);
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
    if (selectedRows.length === purchaseOrders.length) {
      setSelectedRows([]);
    } else {
      const newSelectedRows = Array.from({ length: purchaseOrders.length }, (_, index) => index);
      setSelectedRows(newSelectedRows);
    }
  };

  const handleDeleteSelectedRows = async () => {
    try {
      const filteredOrders = purchaseOrders.filter((order, index) => !selectedRows.includes(index));
      setPurchaseOrders(filteredOrders);
      setSelectedRows([]);

      await Promise.all(selectedRows.map(async (index) => {
        const orderId = purchaseOrders[index]._id;
        await axios.delete(`http://localhost:${CONFIG.PORTUSER}/purchase/order/deletePurchaseOrder/${orderId}`);
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
                Yêu cầu đặt hàng
              </Header>
              <Link to='/purchase/order/Create'>
                <button className="compact ui button" style={{ position: 'absolute', left: 20 }}> + </button>
              </Link>
            </Grid.Row>
            <Link>
              <button onClick={handleDeleteSelectedRows} disabled={selectedRows.length === 0} className="compact ui button" style={{ position: 'absolute', left: 65 }}>-</button>
            </Link>
            <Divider section hidden />
            <Table id="purchaseOrdersTable" singleLine striped unstackable style={{ borderCollapse: 'collapse' }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    <Checkbox
                      indeterminate={selectedRows.length > 0 && selectedRows.length < purchaseOrders.length}
                      checked={selectedRows.length === purchaseOrders.length}
                      onChange={handleSelectAllClick}
                    />
                  </Table.HeaderCell>
                  <Table.HeaderCell >STT</Table.HeaderCell>
                  <Table.HeaderCell >Mã Sản phẩm</Table.HeaderCell>
                  <Table.HeaderCell >Bộ phận</Table.HeaderCell>
                  <Table.HeaderCell >Nhà cung cấp</Table.HeaderCell>
                  <Table.HeaderCell >Người yêu cầu</Table.HeaderCell>
                  <Table.HeaderCell >Người hỗ trợ</Table.HeaderCell>
                  <Table.HeaderCell >Khách hàng</Table.HeaderCell>
                  <Table.HeaderCell >Trạng thái</Table.HeaderCell>
                  <Table.HeaderCell >Ngày tạo</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {purchaseOrders.map((order, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>
                      <Checkbox
                        checked={selectedRows.includes(index)}
                        onChange={() => handleRowCheckboxChange(index)}
                      />
                    </Table.Cell>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>
                      <Link to={`/purchase/order/Detail/${order._id}`}>{order.ProductID}</Link>
                    </Table.Cell>
                    <Table.Cell>{order.Department}</Table.Cell>
                    <Table.Cell>{order.Supplier}</Table.Cell>
                    <Table.Cell>{order.RequestedBy}</Table.Cell>
                    <Table.Cell>{order.SupportedBy}</Table.Cell>
                    <Table.Cell>{order.Customer}</Table.Cell>
                    <Table.Cell>{order.State}</Table.Cell>
                    <Table.Cell>{moment(order.createdAt).format('DD/MM/YYYY')}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <ReactHTMLTableToExcel
              id="exportButton"
              className="compact ui button"
              table="purchaseOrdersTable"
              filename="PurchaseOrders"
              sheet="Sheet"
              buttonText="Xuất Excel"
            />
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default OrderRequestion;
