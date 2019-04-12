import React, { Component } from 'react';
import Header from "../../components/header/Header"
import Map from "../map/Map"
import "./App.scss"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Map />
      </div>
    );
  }
}

export default App;
