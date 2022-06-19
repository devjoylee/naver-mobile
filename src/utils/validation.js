export default function validate(values) {
  let errors = {};

  // id
  if (!values.userId) {
    errors.userId = '아이디를 입력하세요.';
  } else if (values.userId.length < 6) {
    errors.userId = '6자 이상의 아이디를 입력하세요.';
  }

  // password
  if (!values.password) {
    errors.password = '비밀번호를 입력하세요.';
  } else if (values.password.length < 6) {
    errors.password = '6자 이상의 비밀번호를 입력하세요.';
  }

  // confirm password
  if (!values.password2) {
    errors.password2 = '비밀번호를 입력하세요.';
  } else if (values.password2 !== values.password) {
    errors.password1 = '비밀번호가 일치하지 않습니다.';
    errors.password2 = '비밀번호가 일치하지 않습니다.';
  }

  // name
  if (!values.name.trim()) {
    errors.name = '이름을 입력하세요.';
  }

  // email
  if (!values.email) {
    errors.email = '이메일을 입력하세요.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = '유효한 이메일주소를 입력하세요.';
  }

  return errors;
}
