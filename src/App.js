import React, { Component } from "react";
import ChildComponent2 from "./components/lifeCycle/childComponent2";
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "this name will change",
      show: true,
    };
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({ name: "the name was change" });
    }, 3000);

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  render() {
    return (
      <div>
        {/* <p>{this.state.name}</p> */}
        {/* <ChildComponent /> */}
        {/* <ChildComponent1 /> */}
        {this.state.show ? <ChildComponent2 /> : null}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          {this.state.show ? "Mount component" : "Unmount component"}
        </button>
      </div>
    );
  }
}

export default App;
