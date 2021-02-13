import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestSignup } from './service';

function useForm(validate) {
  const [values, setValues] = useState({
    id: '',
    password: '',
    password2: '',
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));

    if (Object.keys(errors).length === 0) {
      // submitForm();
      window.alert('Welcome!');
    }
  };

  const submitForm = async () => {
    if (await requestSignup(values)) {
      history.push('/login');
      window.alert('회원가입 성공. 가입한 아이디로 로그인해주세요');
    } else {
      window.alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
    }
  };

  return { values, errors, handleChange, handleSubmit };
}

export default useForm;
