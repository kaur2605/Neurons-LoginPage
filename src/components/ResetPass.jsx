import React, { Component } from "react"

export default class ResetPass extends Component {
  reset() {
    alert("Password is sent to your email")
  }

  render() {
    return (
      <div className="reset">
        <h1>Write your email</h1>
        <input className="reset-input" />
        <button onClick={this.reset.bind(this)}>Reset Password</button>
      </div>
    )
  }
}
