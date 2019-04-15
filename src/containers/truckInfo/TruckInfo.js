import React, { Component } from "react"

export default class TruckInfo extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <section className="truck-info-container">
                <article>
                    <div className="picture">
                        picture of the truck
                    </div>
                    <div className="info">
                        truck type like cuisine rating 
                    </div>
                    <div className="description">
                        truck description
                    </div>
                    <div className="menu">
                        menu
                    </div>
                </article>
            </section>
        )
    }
}