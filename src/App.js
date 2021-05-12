import "./index.scss"
import React, { useState } from "react"
import Login from "./components/Login/Login"
import Logout from "./components/Logout"

export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const SubmitDetails = () => {
    setIsSubmitting(true)
  }

  return (
    <div className="App">
      {!isSubmitting ? <Login SubmitDetails={SubmitDetails} /> : <Logout />}
    </div>
  )
}
