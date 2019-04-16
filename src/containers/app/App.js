import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCurrentPosition } from "../../actions/Index";
import Header from "../../components/header/Header";
import Home from "../../components/home/Home";
import { getTrucksArray } from "../../thunk/GetTrucksArray";
import {  Switch, Route } from "react-router-dom";
import TruckInfo from '../truckInfo/TruckInfo';


export class App extends Component {
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.getCurrentUserPosition, this.geolocationError)
  }

  getCurrentUserPosition = (position) => {
    const currentPosition = [position.coords.latitude, position.coords.longitude]
    const userInfo = {
      distance: 10, 
      latit: position.coords.latitude,
      long: position.coords.longitude
    }
    this.props.getTrucksArray(userInfo)
    this.props.getCurrentPosition(currentPosition)
  }

  geolocationError = () => {
    console.log("hello im not working")
  }
  
  render() {
    return (
      <div className="App">
      <Header />
        <Switch>
          <Home exact path="/"/>
          <Route exact path="/truck/:id" render={({match}) => {
            const { id } = match.params
            return <TruckInfo id={id}/>
          }} />
        </Switch>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  getCurrentPosition: (position) => dispatch(getCurrentPosition(position)),
  getTrucksArray: (userInfo) => dispatch(getTrucksArray(userInfo))
})

export const mapStateToProps = (state) => ({
  loading: state.loading,
  trucks: state.trucks
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
