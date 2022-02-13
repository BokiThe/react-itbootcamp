import React, { Component } from "react";

class Select extends Component {
  state = {
    value: "Ford",
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <form>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="Ford">Ford</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Mercedes">Mercedes</option>
        </select>
      </form>
    );
  }
}
export default Select;
