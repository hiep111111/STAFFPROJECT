import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Divider, Grid, Header, Menu, Table, Form } from "semantic-ui-react";
import moment from 'moment';
import "semantic-ui-css/semantic.min.css"
import TopMenu from '../Constant/TopMenu.jsx';
import LeftMenu from '../Constant/PurchaseLeftMenu.jsx';
import "../css/App.css";
import "../css/fonts.css"
import CONFIG from '../config/default.js';


const ShowStockAdvantageDetail = () => {
  const [stockAdvantageDetail, setStockAdvantageDetail] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:${CONFIG.PORTSTOCK}/stock/advantage/getStockAdvantage/${id}`)
      .then((response) => {
        setStockAdvantageDetail(response.data);
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
                Thông tin yêu cầu tạm ứng
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
                    <label>Số chứng từ</label>
                    <input value={stockAdvantageDetail.DocumentNo} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Mã kho nguồn</label>
                    <input value={stockAdvantageDetail.SourceStoreCode} readOnly />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Tên kho nguồn</label>
                    <input value={stockAdvantageDetail.SourceStoreName} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Mã Kho đích</label>
                    <input value={stockAdvantageDetail.DestinationStoreCode} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Tên kho đích</label>
                    <input value={stockAdvantageDetail.DestinationStoreName} readOnly />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Người nhận</label>
                    <input value={stockAdvantageDetail.Recipientant} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Trạng thái</label>
                    <input value={stockAdvantageDetail.State} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Mô tả</label>
                    <input value={stockAdvantageDetail.Description} readOnly />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Ngày tạo</label>
                    <input value={formatDate(stockAdvantageDetail.createdAt)} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Lần cập nhật cuối</label>
                    <input value={formatDate(stockAdvantageDetail.updatedAt)} readOnly />
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

export default ShowStockAdvantageDetail;
