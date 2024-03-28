import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Divider, Grid, Header, Menu, Table, Form } from "semantic-ui-react";
import moment from 'moment';
import "semantic-ui-css/semantic.min.css"
import TopMenu from '../Constant/TopMenu.jsx';
import LeftMenu from '../Constant/StockLeftMenu.jsx';
import "../css/App.css";
import "../css/fonts.css"
import CONFIG from '../config/default.js';

const ShowStockReturnDetail = () => {
  const [purchaseRequest, setPurchaseRequest] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:${CONFIG.PORTUSER}/purchase/request/getPurchaseRequest/${id}`)
      .then((response) => {
        setPurchaseRequest(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }, [id]);
  const formatDate = (date) => {
    return moment(date).format('DD/MM/YYYY');
  }

  return (
    <div>
      <TopMenu></TopMenu>
      <Grid padded>
        <LeftMenu></LeftMenu>
        <Grid.Column mobile={16} tablet={13} computer={13} floated="right" id="content">
          <div className="table-container">
            <Grid.Row>
              <Header dividing size="medium" as="h2">
                Thông tin yêu cầu mua hàng
              </Header>
              <Button
                onClick={() => navigate(-1)}
                icon="long arrow alternate left"
                labelPosition="left"
                color='grey'
              />
              <Form>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Số ĐN hoàn ứng</label>
                    <input value={purchaseRequest.StockReturnNumber} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Người hoàn ứng</label>
                    <input value={purchaseRequest.ReturnByUserName} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Người tạo</label>
                    <input value={purchaseRequest.CreatedBy} readOnly />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Trạng thái</label>
                    <input value={purchaseRequest.State} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Mô tả</label>
                    <input value={purchaseRequest.Description} readOnly />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Thời gian tạo</label>
                    <input value={formatDate(purchaseRequest.createdAt)} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Cập nhật cuối</label>
                    <input value={formatDate(purchaseRequest.updatedAt)} readOnly />
                  </Form.Field>
                </Form.Group>
              </Form>
            </Grid.Row>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ShowStockReturnDetail;
