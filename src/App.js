import React, { Component } from "react";
import Home from "./Home.js";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
export default App;
