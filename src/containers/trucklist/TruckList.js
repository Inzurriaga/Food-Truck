import React, { Component } from "react";
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

export class TruckList extends Component{
    render(){
        const truckList = this.props.trucks.map(truck => {
            return(
                <NavLink className="truck-card-link" key={truck.id} to={`/truck/${truck.id}`}>
                    <div className="truck-card">
                        <h2>{truck.name}</h2>
                        <p>{truck.distance.toFixed(2)} miles</p>
                    </div>
                </NavLink>
            )
        })
        return(
            <div className="truck-list-container">
                {
                    this.props.trucks.length === 0 ? 
                    <div className="distance-error">
                        <p>No result<br/> found <br/> change settings to find <br/> trucks around you</p>
                    </div> :
                    truckList
                }
            </div>
        )
    }
}

export const mapStateToProps = (state) => ({
    trucks: state.trucks
})

export default connect(mapStateToProps)(TruckList)

