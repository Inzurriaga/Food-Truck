import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { connect } from "react-redux"

export class MapContainer extends Component{
    render(){
        return(
            <Map className="map" center={this.props.position} zoom="15" zoomOffset={this.zoomOffset}>
                <TileLayer
                        attribution='<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>'
                        url='https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png'/>
                <Marker position={this.props.position}>
                    <Popup>
                        your current position
                    </Popup>
                </Marker>
                {
                    this.props.trucks.map(truck => {
                        return (
                            <Marker key={truck.id} position={truck.position}>
                                <Popup>
                                    {truck.name}
                                </Popup>
                            </Marker>
                        )
                    })
                }
            </Map>
        )
    }
} 

export const mapStateToProps = (state) => ({
    trucks: state.trucks,
    position: state.position
})

export default connect(mapStateToProps)(MapContainer)