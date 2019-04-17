import React, { Component } from "react"
import { updateTrucksArray } from "../../thunk/UpdateTrucksArray"
import { connect } from "react-redux"

export class OptionsTab extends Component{
    constructor(){
        super();
        this.state = {
            location: "",
            distance: 1,
            open: false,
        }
    }

    changeState = (e) => {
        const { value, className } = e.target
        this.setState({
            [className]: value
        })
    }

    openTab = (e) => {
        e.preventDefault()
        this.setState({
            open: !this.state.open
        })
    }

    submitSettings = (e) => {
        const { distance, location } = this.state
        this.openTab(e)
        this.props.updateTrucksArray(distance, location)
        e.preventDefault()
    }

    render(){
        let tab;
        let arrow;
        if(this.state.open){
            tab = {
                left: "0%"
            }
            arrow = {
                transform: "rotate(180deg)"
            }
        }else{
            tab = {
                left: "-22%"
            }
            arrow = {
                transform: "rotate(0deg)"
            }
        }
        return(
            <form style={tab} className="option-tab">
                <div style={arrow} onClick={this.openTab} className="open-button"></div>
                <h2>Settings</h2>
                <section className="location">
                    <h3>Location</h3>
                    <input onChange={this.changeState} className="location" value={this.state.location}></input>
                </section>
                <section>
                    <h3>Distance</h3>
                    <div className="select">
                        <select className="distance" onChange={this.changeState}>
                            <option value="1">1 mile</option>
                            <option value="5">5 mile</option>
                            <option value="10">10 mile</option>
                            <option value="25">25 mile</option>
                        </select>
                    </div>
                </section>
                <button onClick={this.submitSettings} className="submit">submit</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateTrucksArray: (distance, url) => dispatch(updateTrucksArray(distance, url))
})

export default connect(null, mapDispatchToProps)(OptionsTab)