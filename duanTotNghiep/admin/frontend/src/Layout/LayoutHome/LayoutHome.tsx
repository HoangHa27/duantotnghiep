import React, { useState } from 'react'
import CustomHeader from '../Header/header'
import CustomMenu from '../Menu/menu'
import { Layout, Menu, theme } from 'antd'
import { Row, Col } from 'react-bootstrap'
const { Sider, Content } = Layout
import { Outlet } from 'react-router-dom'
import './LayoutHome.scss'

const LayoutHome: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <CustomMenu />
      </Sider>
      <Layout>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutHome
