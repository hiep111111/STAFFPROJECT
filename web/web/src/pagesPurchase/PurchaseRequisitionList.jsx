import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Header, Divider, Table } from "semantic-ui-react";
import axios from 'axios';
import TopMenu from '../Constant/TopMenu.jsx';
import LeftMenu from '../Constant/LeftMenu.jsx';
import CONFIG from "../config/default.js";
import "../css/App.css";
import "../css/fonts.css";

const PurchaseRequisitionList = () => {
  const { id } = useParams();
  const [request, setRequest] = useState(null);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await axios.get(`http://localhost:${CONFIG.PORTUSER}/purchase/request/getPurchaseRequest/${id}`);
        setRequest(response.data);
      } catch (error) {
        console.error('Error fetching request:', error);
      }
    };

    fetchRequest();
  }, [id]);

  return (
    <div className="App">
      <TopMenu></TopMenu>
      <Grid padded>
        <LeftMenu></LeftMenu>
        <Grid.Column obile={16} tablet={13} computer={13} floated="right" id="content">
          <div className="table-container">
            <Grid.Row>
              <Header dividing size="medium" as="h2">
                Thông tin yêu cầu mua hàng
              </Header>
            </Grid.Row>
            <Divider section hidden />
            <Table singleLine striped selectable unstackable style={{ borderCollapse: 'collapse' }}>
              <Table.Body>
                {request && (
                  <>
                    <Table.Row>
                      <Table.Cell width={4}><b>Product ID</b></Table.Cell>
                      <Table.Cell>{request.ProductID}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><b>Department</b></Table.Cell>
                      <Table.Cell>{request.Department}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><b>Supplier</b></Table.Cell>
                      <Table.Cell>{request.Supplier}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><b>Product</b></Table.Cell>
                      <Table.Cell>{request.Product}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><b>Requested By</b></Table.Cell>
                      <Table.Cell>{request.RequestedBy}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><b>Supported By</b></Table.Cell>
                      <Table.Cell>{request.SupportedBy}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><b>Customer</b></Table.Cell>
                      <Table.Cell>{request.Customer}</Table.Cell>
                    </Table.Row>
                    ////
                    <Table.Row>
                      <Table.Cell><b>Customer</b></Table.Cell>
                      <Table.Cell>{request.Customer}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><b>Customer</b></Table.Cell>
                      <Table.Cell>{request.Customer}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><b>Customer</b></Table.Cell>
                      <Table.Cell>{request.Customer}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><b>Customer</b></Table.Cell>
                      <Table.Cell>{request.Customer}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><b>Customer</b></Table.Cell>
                      <Table.Cell>{request.Customer}</Table.Cell>
                    </Table.Row>

                  </>
                )}
              </Table.Body>
            </Table>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};


export default PurchaseRequisitionList;