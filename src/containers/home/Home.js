import React, { Component } from "react";
import { connect } from "react-redux"
import OptionsTab from '../../containers/optionsTab/OptionsTab';
import Map from "../../containers/map/Map";
import Loading from "../../components/loading/Loading"
import TruckList from "../../containers/trucklist/TruckList";

export  class Home extends Component{
    render(){
        return(
            <div className="home">
                <OptionsTab /> 
                {
                    this.props.loading ? 
                    <Loading/> :
                    <div className="home-main">
                        <TruckList />
                        <Map />
                    </div>
                
                }
            </div>
        )
    }
}

export const mapStateToProps = (state) => ({
    loading: state.loading
})

export default connect(mapStateToProps)(Home)

