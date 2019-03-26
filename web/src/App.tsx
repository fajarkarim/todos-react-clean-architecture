import React, { Component } from "react";
import { Todos } from "core";

import "./App.css";

class App extends Component {
  componentDidMount() {
    let todos = new Todos();
    console.log(todos.list);
  }

  render() {
    return <div>Hellow World</div>;
  }
}

export default App;
