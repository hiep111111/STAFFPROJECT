import React, { useState } from "react";
import { Button, Divider, Grid, Header, Icon, Input, Image, Label, Menu, Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../../purchase/src/css/App.css";
import "./css/fonts.css"


const App = () => {
  const [dropdownMenuStyle, setDropdownMenuStyle] = useState({ display: "none" });

  const handleToggleDropdownMenu = () => {
    setDropdownMenuStyle(prevStyle => ({
      display: prevStyle.display === "none" ? "flex" : "none"
    }));
  };

  return (
    <div className="App">
      <Grid padded className="">
        <Menu borderless inverted fluid fixed="top">
          <Menu.Menu position="left">
            <Menu.Item header style={{ width: "12%", display: "flex" }}></Menu.Item>
            <Menu.Item header as="a" style={{ borderLeft: "2px solid white", borderRight: "2px solid white", padding: "12px", width: "100%", display: "flex", justifyContent: "center" }}>TMS</Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item as="a">Dashboard</Menu.Item>
            <Menu.Item as="a">Settings</Menu.Item>
            <Menu.Item as="a">Profile</Menu.Item>
            <Menu.Item as="a">Help</Menu.Item>
          </Menu.Menu>
        </Menu>
      </Grid>
      <Grid padded>
        <Grid.Column
          computer={3}
          only="tablet computer"
          id="sidebar"
        >
          <Menu vertical borderless fluid text>
            <Header dividing> Mua hàng </Header>
            <Menu.Item active as="a"> Yêu cầu mua hàng </Menu.Item>
            <Menu.Item as="a">Yêu cầu đặt hàng</Menu.Item>
            <Menu.Item as="a">Yêu cầu báo giá (chưa code)</Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column obile={16} tablet={13} computer={13} floated="right" id="content">
          <div className="table-container">
            <Grid.Row>
              <Header dividing size="medium" as="h2">
                Tạm ứng vật tư
              </Header>
            </Grid.Row>
            <Divider section hidden />
            <Table singleLine striped selectable unstackable style={{ borderCollapse: 'collapse' }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell >STT</Table.HeaderCell>
                  <Table.HeaderCell >Mã Sản phẩm</Table.HeaderCell>
                  <Table.HeaderCell >Bộ phận</Table.HeaderCell>
                  <Table.HeaderCell >Nhà cung cấp</Table.HeaderCell>
                  <Table.HeaderCell >Sản phẩm</Table.HeaderCell>
                  <Table.HeaderCell >Người yêu cầu</Table.HeaderCell>
                  <Table.HeaderCell >Người hỗ trợ</Table.HeaderCell>
                  <Table.HeaderCell >Khách hàng</Table.HeaderCell>
                  <Table.HeaderCell >Ngày tạo</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {/*call api sau đó thêm map vào đây*/}
              </Table.Body>
            </Table>
          </div>
        </Grid.Column>

      </Grid>
    </div>
  );
};

export default App;
