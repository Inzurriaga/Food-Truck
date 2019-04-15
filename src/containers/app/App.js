import React, { Component } from 'react';
import { connect } from "react-redux"
import { getCurrentPosition } from "../../actions/Index"
import Header from "../../components/header/Header"
import Home from "../../components/home/Home"
import Loading from "../../components/loading/Loading"
import { getTruck } from "../../thunk/GetTruck";
import {  Switch, Route } from "react-router-dom"
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
    this.props.getTruck(userInfo)
    this.props.getCurrentPosition(currentPosition)
  }

  geolocationError = () => {
    console.log("hello im not working")
  }
  
  render() {
    console.log(this.props.loading)
    return (
      <div className="App">
      <Header />
        {
          this.props.loading ? 
            <Loading /> :
            <Switch>
              <Home exact path="/"/>
              <Route exact path="/truck/:id" render={({match}) => {
                const { id } = match.params
                const truckInfo = this.props.trucks.find(truck => {
                  return truck.id == id
                })
                return <TruckInfo truckInfo={truckInfo}/>
              }} />
            </Switch> 
        }
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  getCurrentPosition: (position) => dispatch(getCurrentPosition(position)),
  getTruck: (userInfo) => dispatch(getTruck(userInfo))
})

export const mapStateToProps = (state) => ({
  loading: state.loading,
  trucks: state.trucks
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
