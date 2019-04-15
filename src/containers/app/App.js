import React, { Component } from 'react';
import { connect } from "react-redux"
import { getCurrentPosition, loadingDisplay } from "../../actions/Index"
import Header from "../../components/header/Header"
import Home from "../../components/home/Home"
import Loading from "../../components/loading/Loading"
import { getTruck } from "../../thunk/GetTruck";
import {  Switch, Route } from "react-router-dom"
import TruckInfo from '../truckInfo/TruckInfo';

class App extends Component {
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.getCurrentUserPosition, this.geolocationError)
  }

  getCurrentUserPosition = (position) => {
    const currentPosition = [position.coords.latitude, position.coords.longitude]
    this.props.getTruck()
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
              return <TruckInfo />
              }} />
            </Switch> 
        }
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  getCurrentPosition: (position) => dispatch(getCurrentPosition(position)),
  loadingDisplay: () => dispatch(loadingDisplay()),
  getTruck: () => dispatch(getTruck())
})

export const mapStateToProps = (state) => ({
  loading: state.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
