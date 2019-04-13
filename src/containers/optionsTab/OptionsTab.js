import React, { Component } from "react"

export default class OptionsTab extends Component{
    constructor(){
        super();
        this.state = {
            distance: 0,
            cuisine: "",
            rating: 0,
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
                    <option>1</option>
                    <option>5</option>
                    <option>10</option>
                    <option>25</option>
                </select>
                <select>
                    <option>mexican</option>
                    <option>asian</option>
                    <option>indian</option>
                    <option>soul food</option>
                    <option>desert</option>
                </select>
                <div>
                    <input type="radio"></input>
                    <input type="radio"></input>
                    <input type="radio"></input>
                    <input type="radio"></input>
                </div>
                <button>submit</button>
            </form>
        )
    }
}