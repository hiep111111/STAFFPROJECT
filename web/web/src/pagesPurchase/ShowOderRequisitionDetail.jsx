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


const ShowOderRequisitionDetail = () => {
  const [purchaseOrder, setPurchaseOrder] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:${CONFIG.PORTUSER}/purchase/order/getPurchaseOrder/${id}`)
      .then((response) => {
        setPurchaseOrder(response.data);
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
                Thông tin yêu cầu đặt hàng
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
                    <label>Mã sản phẩm</label>
                    <input value={purchaseOrder.ProductID} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Bộ phận</label>
                    <input value={purchaseOrder.Department} readOnly />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Công ty đặt hàng</label>
                    <input value={purchaseOrder.OrderCompany} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Nhà cung cấp</label>
                    <input value={purchaseOrder.Supplier} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Người yêu cầu</label>
                    <input value={purchaseOrder.RequestedBy} readOnly />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Người hỗ trợ</label>
                    <input value={purchaseOrder.SupportedBy} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Khách hàng</label>
                    <input value={purchaseOrder.Customer} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Tên sản phẩm</label>
                    <input value={purchaseOrder.ProductName} readOnly />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Số lượng</label>
                    <input value={purchaseOrder.Quantity} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Đơn giá</label>
                    <input value={purchaseOrder.UnitPrice} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Thành tiền (NoVAT)</label>
                    <input value={purchaseOrder.IntoMonneyNoVAT} readOnly />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>VAT</label>
                    <input value={purchaseOrder.VAT} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Thành tiền</label>
                    <input value={purchaseOrder.IntoMonney} readOnly />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Ngày tạo</label>
                    <input value={formatDate(purchaseOrder.createdAt)} readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Lần cập nhật cuối</label>
                    <input value={formatDate(purchaseOrder.updatedAt)} readOnly />
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

export default ShowOderRequisitionDetail;
