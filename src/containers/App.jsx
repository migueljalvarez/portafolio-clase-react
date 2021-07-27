import React, { Component } from "react";
import About from "../components/About";
import {Info} from "../utils/data"

class App extends Component {
  render() {
    return (
      <div>
        <About data={Info}/>
      </div>
    );
  }
}
export default App;