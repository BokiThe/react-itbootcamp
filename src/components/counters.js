import React, { Component } from "react";
import ChildCounter from "./counterChild";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
    ],
  };

  handleIncrement = (id) => {
    console.log(id);

    this.setState({
      counters: this.state.counters.map((item) => {
        return item.id === id ? { ...item, value: item.value + 1 } : item;
      }),
    });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <ChildCounter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
