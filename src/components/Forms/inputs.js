import React, { Component } from "react";

class Inputs extends Component {
  state = {
    name: "",
    age: "",
    errMsg: "",
  };

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    let errMsg = "";
    if (name === "age") {
      if (value !== "" && !Number(value)) {
        errMsg = "You must enter a number";
      }
    }

    this.setState({ [name]: value });
    this.setState({ errMsg: errMsg });
  };
  render() {
    return (
      <form>
        <h1> Hello {this.state.name}</h1>
        <p>
          Your age is: <strong>{this.state.age}</strong>{" "}
        </p>
        <p>Please enter your name</p>
        <input type="text" name="name" onChange={this.handleChange} />
        <p>Please enter your age</p>
        <input type="text" name="age" onChange={this.handleChange} />
        <strong style={{ color: "red" }}>{this.state.errMsg}</strong>
      </form>
    );
  }
}

export default Inputs;
