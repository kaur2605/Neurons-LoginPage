import Enzyme from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import { shallow, mount } from "enzyme"
import Login from "./Login"
import { findByTestAtt } from "../testUtils"

Enzyme.configure({ adapter: new Adapter() })

const setup = (props = {}) => {
  return shallow(<Login {...props} />)
}
describe("Login Component", () => {
  test("render without error", () => {
    const wrapper = setup()
    const component = findByTestAtt(wrapper, "component-login")
    expect(component.length).toBe(1)
  })

  test("input box render with email tag", () => {
    const wrapper = setup()
    expect(wrapper.find('input[name="email"]').exists()).toBe(true)
  })

  test("input box should render euth password tag", () => {
    const wrapper = setup()
    expect(wrapper.find('input[name="password"]').exists()).toBe(true)
  })
})
