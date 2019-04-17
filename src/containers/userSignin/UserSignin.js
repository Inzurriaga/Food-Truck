import React, { Component } from "react"
import { signin } from "../../thunk/Signin"
import { createAccount } from "../../thunk/CreateAccount"
import { connect } from "react-redux"

export class UserAccount extends Component{
    constructor(){
        super();
        this.state = {
            UserName: "",
            signin: true
        }
    }

    toggleSignin = () => {
        this.setState({
            signin: !this.state.signin
        })
    }

    createAccount = (e) => {
        e.preventDefault()
        this.props.createAccount("user", {})
    }

    signIn = (e) => {
        e.preventDefault()
        this.props.signin("user", {})
    }

    render(){
        return(
            <div className="user-signin-form">
                {
                    this.state.signin ?
                    <div>
                    <form>
                        <div>
                            <p>UserName</p>
                            <input type="text"></input>
                        </div>
                        <div>
                            <p>password</p>
                            <input type="password"></input>
                        </div>
                        <button onClick={this.signIn} >SignIn</button>
                    </form>
                    <button onClick={this.toggleSignin}>create Account</button>
                    </div> :
                    <div>
                    <form>
                        <div>
                            <p>UserName</p>
                            <input type="text"></input>
                        </div>
                        <div>
                            <p>password</p>
                            <input type="password"></input>
                        </div>
                        <div>
                            <p>re-enter password</p>
                            <input type="password"></input>
                        </div>
                        <button onClick={this.createAccount} >Create account</button>
                    </form>
                    <button onClick={this.toggleSignin}>sign in</button>
                    </div>
                }   
            </div>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    signin: (userType, userInfo) => dispatch(signin(userType, userInfo)),
    createAccount: (userType, userInfo ) => dispatch(createAccount(userType, userInfo))
})

export default connect(null, mapDispatchToProps)(UserAccount)