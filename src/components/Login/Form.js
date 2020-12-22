import React, { useState } from 'react';
import { Input, LoginButton } from './Login.elements';

function Form() {
  const [formValues, setFormValues] = useState({
    id: '',
    password: '',
  });

  const { id, password } = formValues;

  const handleFormValues = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const isSubmittable = id && password;

  return (
    <>
      <Input
        id="id"
        value={id}
        placeholder="아이디"
        onChange={handleFormValues}
      />
      <Input
        id="password"
        type="password"
        value={password}
        placeholder="비밀번호"
        onChange={handleFormValues}
      />
      <LoginButton to="/" disabled={!isSubmittable}>
        로그인
      </LoginButton>
    </>
  );
}

export default Form;
