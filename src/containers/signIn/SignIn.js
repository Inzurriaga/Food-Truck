import React, { Component } from "react"
import  UserAccount  from "../userSignin/UserSignin"
import TrucksAccount  from "../truckSignin/TruckSignin"

export class SignIn extends Component{
    constructor(){
        super()
        this.state = {
            accountType: "user"
        };
    }

    toggleAccountType = (account) => {
            this.setState({
                accountType: account
            })
    }

    render(){
        return(
            <div className="signin-modal">
                <div className="signin-section">
                    <button className="user-signin" onClick={() => {this.toggleAccountType("user")}}>User</button>
                    <button className="truck-signin" onClick={() => {this.toggleAccountType("truck")}}>Trucks</button>
                    {
                        this.state.accountType === "user" ?
                        <UserAccount /> :
                        <TrucksAccount />
                    }
                </div>
            </div>
        )
    }
}