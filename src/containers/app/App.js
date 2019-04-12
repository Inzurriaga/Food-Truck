import React, { Component } from 'react';
import { connect } from "react-redux"
import { getCurrentPosition, loadingDisplay } from "../../actions/Index"
import Header from "../../components/header/Header"
import Map from "../map/Map"
import Loading from "../../components/loading/Loading"

class App extends Component {
  componentDidMount(){
    this.props.loadingDisplay()
    navigator.geolocation.getCurrentPosition(this.getCurrentUserPosition, this.geolocationError)
  }

  getCurrentUserPosition = (position) => {
    console.log("hello")
    const currentPosition = [position.coords.latitude, position.coords.longitude]
    this.props.getCurrentPosition(currentPosition)
    this.props.loadingDisplay()

  }

  geolocationError = () => {
    console.log("hello im not working")
  }
  
  render() {
    return (
      <div className="App">
      <Header />
        {
          this.props.loading ? 
            <div>
            <Header />
            <Map />
            </div>
           : <Loading />
        }
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  getCurrentPosition: (position) => dispatch(getCurrentPosition(position)),
  loadingDisplay: () => dispatch(loadingDisplay())
})

export const mapStateToProps = (state) => ({
  loading: state.loading
})

export default connect(null, mapDispatchToProps)(App);
