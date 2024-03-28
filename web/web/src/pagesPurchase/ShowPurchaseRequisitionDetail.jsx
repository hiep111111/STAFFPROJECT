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

const ShowPurchaseRequisitionDetail = () => {
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
                    <label>ID sản phẩm</label>
                    <input value={purchaseRequest.ProductID} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Bộ phận</label>
                    <input value={purchaseRequest.Department} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Công ty đặt hàng</label>
                    <input value={purchaseRequest.OrderCompany} readOnly />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Loại yêu cầu</label>
                    <input value={purchaseRequest.PurchaseRequisitionType} readOnly />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Người yêu cầu</label>
                    <input value={purchaseRequest.RequestedBy} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Người hỗ trợ</label>
                    <input value={purchaseRequest.SupportedBy} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Khách hàng</label>
                    <input value={purchaseRequest.Customer} readOnly />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Số lượng</label>
                    <input value={purchaseRequest.Quantity} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Đơn  giá</label>
                    <input value={purchaseRequest.UnitPrice} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Thành tiền (No VAT)</label>
                    <input value={purchaseRequest.IntoMonneyNoVAT} readOnly />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>VAT</label>
                    <input value={purchaseRequest.VAT} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Thành tiền</label>
                    <input value={purchaseRequest.IntoMonney} readOnly />
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

export default ShowPurchaseRequisitionDetail;
