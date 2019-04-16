import React, { Component } from "react"
import { connect } from "react-redux"
import { getTruckInfo } from "../../thunk/GetTruckInfo"

export class TruckInfo extends Component{
    constructor(){
        super();
        this.state = {
            truckInfo: {}
        }
    }

    componentDidMount(){
        this.truckInfo(this.props.id)
    }

    truckInfo =  async(id) => {
        const url = `http://localhost:3000/api/${id}`
        const truckInfo = await this.props.getTruckInfo(url)
        this.setState({ truckInfo })
    }
    
    render(){
        const {name, site, descrip } = this.state.truckInfo;
        return(
            <section className="truck-info-container">
                <article>
                    <div className="picture">
                        picture of the truck
                    </div>
                    <div className="info">
                        <a href={`${site}`}>{site}</a>
                    </div>
                    <div className="description">
                        <h2>{name}</h2>
                        <p>{descrip}</p>
                    </div>
                    <div className="menu">
                        <h2>Menu</h2>
                    </div>
                </article>
            </section>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    getTruckInfo: url => dispatch(getTruckInfo(url))
})

export default connect(null, mapDispatchToProps)(TruckInfo)