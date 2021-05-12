import { render, screen } from "@testing-library/react"
import App from "./App"
import Validate from './components/Validate'
describe("App", () => {
  test("should return correct email id", () => {
    const email = ""

    expect(Validate(email)).toBe("Email required")
  })


})
