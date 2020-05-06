import React, { Component } from "react";
import ProfileSettings from "./Components/ProfileSettings";
import ProfileNotifications from "./Components/ProfileNotifications";
import Task from "./Components/Task";
import MyNavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

export class App extends Component {
  state = {
    user: "Guest",
    component: null,
    data: null,
    profileExpand: false,
    taskExpand: false,
  };

  onSubmit = (values, { resetForm }) => {
    console.log(values);
    this.setState({
      user: values.name,
    });
    resetForm();
  };

  settingsComponent = () => {
    this.setState({
      component: "settingsComponent",
    });
  };
  notificationComponent = () => {
    this.setState({
      component: "notificationComponent",
    });
  };
  taskComponent1 = () => {
    this.setState({
      component: "taskComponent1",
    });
  };
  taskComponent2 = () => {
    this.setState({
      component: "taskComponent2",
    });
  };
  profileExpand = () => {
    this.setState({
      profileExpand: true,
    });
  };
  taskExpand = () => {
    if (this.state.user !== "Guest") {
      this.setState({
        taskExpand: true,
      });
    }
  };

  render() {
    return (
      <div className="mainDiv">
        <Container fluid>
          <Row>
            <Col xs="12" md="12" lg="12">
              <MyNavBar name={this.state.user} />
            </Col>
          </Row>
          <Row>
            <Col xs="4" md="4" lg="2">
              <SideBar
                settingsComponent={this.settingsComponent}
                notificationComponent={this.notificationComponent}
                taskComponent1={this.taskComponent1}
                taskComponent2={this.taskComponent2}
                profileExpand={this.profileExpand}
                profileExpanded={this.state.profileExpand}
                taskExpand={this.taskExpand}
                taskExpanded={this.state.taskExpand}
              />
            </Col>
            <Col xs="6" md="6" lg="10">
              {this.state.component === null ? null : this.state.component ===
                "settingsComponent" ? (
                <ProfileSettings mySubmit={this.onSubmit} />
              ) : this.state.component === "notificationComponent" ? (
                <ProfileNotifications />
              ) : this.state.user !== "Guest" &&
                this.state.component === "taskComponent1" ? (
                <Task name="Task 1" />
              ) : this.state.user !== "Guest" &&
                this.state.component === "taskComponent2" ? (
                <Task name="Task 2" />
              ) : null}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
