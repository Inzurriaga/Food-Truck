import React, { Component } from "react"
import image from "../../images/title-truck.png"

export default class Header extends Component{
    render(){
        return (
            <header>
                <div>
                    <h1>Foodie</h1>
                    <img src={image} alt="header"/>
                    <h1>Wheels</h1>
                </div> 
            </header>
        )
    }
}