import React, { Component } from "react"
import image from "../../images/title-truck.png"
import { Link } from "react-router-dom"

export default class Header extends Component{
    render(){
        return (
            <header>
                <div>
                    <Link className="header" to="/">
                        <h1>Foodie</h1>
                        <img src={image} alt="header"/>
                        <h1>Wheels</h1>
                    </Link>
                </div> 
                <Link className="sign-in" to="/signin">
                        Sign in
                </Link>
            </header>
        )
    }
}