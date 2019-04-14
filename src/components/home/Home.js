import React from "react";
import OptionsTab from '../../containers/optionsTab/OptionsTab';
import Map from "../../containers/map/Map";
import TruckList from "../../containers/trucklist/TruckList";

export default function Home () {
    return(
        <div className="home">
            <OptionsTab /> 
            <TruckList />
            <Map />
        </div>
    )
}