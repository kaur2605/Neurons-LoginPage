import React, { useState } from "react"
import ResetPass from "../ResetPass"
import Validate from "../Validate"
import useForm from "../useForm"

function Login({ SubmitDetails }) {
  const { handleChange, handleSubmit, data, errors } = useForm(
    SubmitDetails,
    Validate
  )
  const [forget, setForget] = useState(false)

  const forgetPassword = () => {
    setForget(true)
  }

  return (
    <div className="container" data-test="component-login">
      <div className="headline">
        <h1 className="user">User</h1>
        <h1 className="heading-login"> login</h1>
      </div>

      {!forget && (
        <form data-test="form-submit" onSubmit={handleSubmit} id="submit">
          <div className="Form-field">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <br></br>
            <input
            data-test="input-box"
            id = "email"
              type="text"
              aria-label="Email"
              name="email"
              className="form-group"
              placeholder="john@company.com"
              onChange={handleChange}
              value={data.email}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="password">
              Password
            </label>{" "}
            <input
              aria-label="Password"
              type="password"
              name="password"
              className="form-group"
              placeholder="password"
              onChange={handleChange}
              value={data.password}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="extra">
            <div className="radiobutton">
              {" "}
              <input type="radio" name="password" value="remember" />
              <label>Remember me?</label>
            </div>
            <a href="#" onClick={forgetPassword}>
              Forget Password?
            </a>
          </div>
          <button className="login"> Login</button>
        </form>
      )}
      {forget && <ResetPass />}
    </div>
  )
}

export default Login
