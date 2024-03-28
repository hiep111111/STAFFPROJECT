import React from 'react';
import { Menu, Link } from 'semantic-ui-react'; // Import thư viện semantic-ui-react

const RightMenu = () => {
  return (
    <Menu.Menu position="right">
      <Link to='/purchase/purchase'>
        <Menu.Item as="a">Dashboard</Menu.Item>
      </Link>
      <Link to='/purchase/purchase'>
        <Menu.Item as="a">Settings</Menu.Item>
      </Link>
      <Link to='/purchase/purchase'>
        <Menu.Item as="a">Profile</Menu.Item>
      </Link>
      <Link to='/purchase/purchase'>
        <Menu.Item as="a">Help</Menu.Item>
      </Link>
    </Menu.Menu>
  );
};

export default RightMenu;
