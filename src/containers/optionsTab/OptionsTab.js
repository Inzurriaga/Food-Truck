import React, { Component } from "react"

export default class OptionsTab extends Component{
    constructor(){
        super();
        this.state = {
            distance: 0,
            open: false,
        }
    }

    openTab = (e) => {
        e.preventDefault()
        this.setState({
            open: !this.state.open
        })
    }


    render(){
        let tab;
        if(this.state.open){
            tab = {
                left: "0"
            }
        }else{
            tab = {
                left: "-17%"
            }
        }
        return(
            <form style={tab} className="option-tab">
                <button onClick={this.openTab} className="open-button"></button>
                <select>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                </select>
                <button>submit</button>
            </form>
        )
    }
}