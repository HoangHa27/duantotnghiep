import React from 'react'
import { Menu, Avatar } from 'antd'
import {
  UserOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  BankOutlined,
  HomeOutlined,
  TeamOutlined,
  HddOutlined,
  InsertRowRightOutlined,
  CoffeeOutlined,
  BarChartOutlined,
  ApartmentOutlined,
} from '@ant-design/icons'
import { user } from '../../assets/image'
import { Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import './menu.scss'

const CustomMenu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="user-info">
        <Row align="middle">
          <Col className="Avatar">
            <Avatar size="large" src={user}/>
            <a href="#" className="username">
              nguyễn thị aaaaaaa
            </a>
          </Col>
        </Row>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item
          key="HomePage"
          icon={<ApartmentOutlined />}>
           <Link to="/home">Home Page</Link>
        </Menu.Item>
        <Menu.SubMenu key="User" title="User" icon={<UserOutlined />}>
          <Menu.Item key="UsersList" icon={<UnorderedListOutlined />}>
            <Link to="">Users List</Link>
          </Menu.Item>
          <Menu.Item key="AddUser" icon={<UserAddOutlined />}>
            <Link to="">Add User</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="Hotel" title="Hotel" icon={<BankOutlined />}>
          <Menu.Item key="HotelList" icon={<UnorderedListOutlined />}>
            <Link to="/home/hotel/manager">Hotel List</Link>
          </Menu.Item>
          <Menu.Item key="AddHotel" icon={<BankOutlined />}>
            <Link to="/home/hotel/add">Add Hotel</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="MyHotel" title="My Hotel" icon={<HomeOutlined />}>
          <Menu.Item key="HotelUserList" icon={<TeamOutlined />}>
            <Link to="">Hotel User List</Link>
          </Menu.Item>
          <Menu.Item key="CategoryHotelRoom" icon={<HddOutlined />}>
            <Link to="">Category Hotel Room</Link>
          </Menu.Item>
          <Menu.Item key="HotelRoomList" icon={<InsertRowRightOutlined />}>
            <Link to="">Hotel Room List</Link>
          </Menu.Item>
          <Menu.Item key="HotelService" icon={<CoffeeOutlined />}>
            <Link to="">Hotel Service</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="HotelReport"
          title="Hotel Report"
          icon={<BarChartOutlined />}
        >
          <Menu.Item key="3" icon={<TeamOutlined />}>
            demo
          </Menu.Item>
          <Menu.Item key="4" icon={<HddOutlined />}>
            demo
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  )
}

export default CustomMenu
