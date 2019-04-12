import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default class MapContainer extends Component{
    render(){
        const position = [39.665905, -104.992843]
        const positionone = [39.7, -104.992843]
        return(
            <Map className="map" center={position} zoom="15" zoomOffset={this.zoomOffset}>
                <TileLayer
                        attribution='<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>'
                        url='https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png'/>
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup.
                        <br/>
                        Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={positionone}>
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