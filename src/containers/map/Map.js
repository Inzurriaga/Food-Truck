import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.scss"

export default class MapContainer extends Component{
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
        zoomOffset: 1
    }
    render(){
        const position = [39.665905, -104.992843]
        return(
            <Map className="map" center={position} zoom={this.state.zoom} zoomOffset={this.zoomOffset}>
                <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup.
                        <br/>
                        Easily customizable.
                    </Popup>
                </Marker>
            </Map>
        )
    }
} 