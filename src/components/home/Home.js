import React from "react";
import OptionsTab from '../../containers/optionsTab/OptionsTab';
import Map from "../../containers/map/Map";

export default function Home () {
    return(
        <div className="home">
            <OptionsTab /> 
            <Map />
        </div>
    )
}