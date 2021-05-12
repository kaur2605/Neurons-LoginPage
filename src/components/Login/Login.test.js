import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {

 test('inputbox should have labeled correctly', () => {

const component = render(<Login/>);
const emailInputnode = component.getByLabelText("Email")
expect(emailInputnode.getAttribute("name")).toBe("email");

 })



} )