export default function Validate(data) {
  let errors = {};


  if (!data.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!data.password) {
    errors.password = 'Password is required';
  } else if (data.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  return errors;
}