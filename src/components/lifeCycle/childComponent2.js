import React, { Component } from "react";

export default class ChildComponent2 extends Component {
  componentWillUnmount() {
    alert("this component will be unmount");
  }
  render() {
    return <div>I'm child component</div>;
  }
}
