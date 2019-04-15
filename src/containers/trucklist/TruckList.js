import React, { Component } from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom"

export class TruckList extends Component{
    render(){
        const truckList = this.props.trucks.map(truck => {
            return(
                <Link>
                    <div>
                        <h2>{truck.name}</h2>
                    </div>
                </Link>
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

