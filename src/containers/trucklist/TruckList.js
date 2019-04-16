import React, { Component } from "react";
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

export class TruckList extends Component{
    render(){
        const truckList = this.props.trucks.map(truck => {
            return(
                <NavLink key={truck.id} to={`/truck/${truck.id}`}>
                    <div className="truck-card">
                        <h2>{truck.name}</h2>
                    </div>
                </NavLink>
            )
        })
        return(
            <div className="truck-list-container">
                {
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

