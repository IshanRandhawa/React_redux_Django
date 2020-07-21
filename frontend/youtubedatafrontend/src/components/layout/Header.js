import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import Dashboard from "../channels/Dashboard";

export class Header extends Component {
  render() {
    const { Header, Content, Footer } = Layout;

    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">DJANGO_REACT_EXAMPLE</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item key="1">Home</Breadcrumb.Item>
            <Breadcrumb.Item key="2">Database</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Dashboard />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          React-Redux with Django Backend{" "}
        </Footer>
      </Layout>
    );
  }
}

export default Header;
