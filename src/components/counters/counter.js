import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    source: "http://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };
  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  styles = {
    fontSize: "10px",
    fontWeight: "bold",
  };

  changeClass = () => {
    return this.state.counter <= 0 ? "warning" : "success";
  };

  formatCounter = () => {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  };

  render() {
    return (
      <div className="myClass">
        <h2 style={this.styles}>Pozdrav</h2>
        <p style={{ fontSize: 30 }}>ja sam paragraf</p>
        <img src={this.state.source} alt="pic" />
        <button onClick={this.handleDecrement}>-</button>
        <p className={this.changeClass()}>Count: {this.formatCounter()}</p>
        <button onClick={this.handleIncrement}>+</button>
        <h1>Tagovi</h1>

        {this.state.tags.map((tag, index) => (
          <p key={index}>#{tag}</p>
        ))}
      </div>
    );
  }
}

export default Counter;
