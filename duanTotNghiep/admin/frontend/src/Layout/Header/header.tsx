import React, { useState } from 'react';
import { Button, Layout, theme } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  GlobalOutlined,
  PoweroffOutlined,
  SunOutlined
} from '@ant-design/icons';
import { Row, Col, Form } from 'react-bootstrap';

import './header.scss';

const { Header } = Layout;

const CustomHeader: React.FC<{
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}> = ({ collapsed, setCollapsed }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleMoonIconClick = () => {
    // hàm thay đổi màu sắc ngày đêm
  };

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Row>
        <Col
          className="d-flex "
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: '16px', width: 64, height: 64 }}
            className="menu-toggle-button"
          />
          <Form>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ }}
            />
          </Form>
        </Col>
        <Col xs={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', }}>
        {isDarkMode ? (
            <SunOutlined className="header-icon" style={{ fontSize: '18px', marginRight: '3%' }} onClick={handleMoonIconClick} />
          ) : (
            <MoonOutlined className="header-icon" style={{ fontSize: '18px', marginRight: '3%' }} onClick={handleMoonIconClick} />
          )}
          <GlobalOutlined className="header-icon" style={{ fontSize: '18px', marginRight: '3%' }} />
          <PoweroffOutlined className="header-icon" style={{ fontSize: '18px', marginRight: '3%' }} />
          
        </Col>
      </Row>
    </Header>
  );
};

export default CustomHeader;
