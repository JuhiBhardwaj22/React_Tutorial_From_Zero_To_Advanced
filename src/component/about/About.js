import React from "react";
import ProfileClass from "../profile/ProfileClass";
import Profile from "../profile/Profile";
import { Outlet } from "react-router-dom";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state ={
      userInfo:{

      }
    }
    console.log("Parent - Constructor");
  }
   componentDidMount() {
    console.log("Parent - ComponentDidMount");
  }
  render() {
    console.log("Parent -  render");
    return (
      <div>
        <h1>About Page</h1>
        <p>Will Update you Later</p>
        <ProfileClass name={"  First-Child "} xyz="xyz" />
        <Profile name={"Function-Juhi"} />
      </div>
    );
  }
}
export default About;
