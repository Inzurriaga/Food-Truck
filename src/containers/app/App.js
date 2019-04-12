import React, { Component } from 'react';
import Header from "../../components/header/Header"
import Map from "../map/Map"

class App extends Component {
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.getCurrentUserPosition, this.geolocationError)
  }

  getCurrentUserPosition = (position) => {
    console.log(position.coords.latitude, position.coords.longitude)
  }

  geolocationError = () => {
    console.log("hello im not working")
  }
  
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
