export default function validate(values) {
  let errors = {};

  // id
  if (!values.userId) {
    errors.userId = 'Please enter your ID.';
  } else if (values.userId.length < 5 || values.userId.length > 15) {
    errors.userId = 'ID must be between 5 and 15 characters.';
  }

  // password
  if (!values.password) {
    errors.password = 'Please enter your password.';
  } else if (values.password.length < 6 || values.userId.length > 20) {
    errors.password = 'Password must be between 6 and 20 characters.';
  }

  // confirm password
  if (!values.password2) {
    errors.password2 = 'Please enter your password again.';
  } else if (values.password2 !== values.password) {
    errors.password1 = 'Passwords do not match. Please try again.';
    errors.password2 = 'Passwords do not match. Please try again.';
  }

  // name
  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  // email
  if (!values.email) {
    errors.email = 'Please enter your email.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email address is not vaild. Please try again.';
  }

  return errors;
}
