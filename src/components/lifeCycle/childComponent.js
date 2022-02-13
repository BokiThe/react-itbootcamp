import React, { Component } from "react";

export default class ChildComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "shouldComponentUpdate metoda",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "componentDidMount method" });
    }, 1000);
  }
  render() {
    return (
      <div>
        <p>this is {this.state.name}</p>
      </div>
    );
  }
}
