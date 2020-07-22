import React, { Component } from "react";
import { Layout, Menu } from "antd";
import "../channels/GetData.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import GetCityData from "../channels/GetCityData";
import Channels from "../channels/Channels";

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
          <Router>
            <div className="App">
              <ul className="App-header">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Database">Database</Link>
                </li>
              </ul>
              <Switch>
                <Route exact path="/" component={GetCityData}></Route>
                <Route exact path="/Database" component={Channels}></Route>
              </Switch>
            </div>
          </Router>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          React-Redux with Django Backend{" "}
        </Footer>
      </Layout>
    );
  }
}

export default Header;
