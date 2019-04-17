import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCurrentPosition, errorHandling } from "../../actions/Index";
import Header from "../../components/header/Header";
import Home from "../home/Home";
import { getTrucksArray } from "../../thunk/GetTrucksArray";
import {  Switch, Route } from "react-router-dom";
import TruckInfo from '../truckInfo/TruckInfo';
import { SignIn } from "../signIn/SignIn"


export class App extends Component {
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.getCurrentUserPosition, this.geolocationError)
  }

  getCurrentUserPosition = (position) => {
    const {getTrucksArray, getCurrentPosition} = this.props
    const { latitude, longitude } = position.coords
    const currentPosition = [latitude, longitude]
    const userInfo = {
      distance: 10, 
      latit: latitude,
      long: longitude
    }
    getTrucksArray(userInfo)
    getCurrentPosition(currentPosition)
  }

  geolocationError = () => {
    this.props.errorHandling("GPS not working use the settings to enter a location")
  }
  
  render() {
    return (
      <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signin" component={SignIn}/>
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
  getTrucksArray: (userInfo) => dispatch(getTrucksArray(userInfo)),
  errorHandling: (error) => dispatch(errorHandling(error))

})

export const mapStateToProps = (state) => ({
  loading: state.loading,
  trucks: state.trucks
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
