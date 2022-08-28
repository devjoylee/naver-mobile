import React, { useState } from 'react';
import * as S from './styles';
import useForm from 'hooks/useForm';
import validate from 'utils/validation';
import { useNavigate } from 'react-router-dom';

export const JoinForm = () => {
  const [errors, setErrors] = useState({});
  const { values, handleChange } = useForm({
    userId: '',
    password: '',
    password2: '',
    name: '',
    email: '',
  });

  const navigate = useNavigate();
  const { userId, password, password2, name, email } = values;

  const isSubmittable = userId && password && password2 && name && email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = await validate(values);
    const hasInvaild = Object.keys(error).length;
    if (!hasInvaild) {
      try {
        // const res = await requestSignup(values);
        localStorage.setItem(
          'user',
          JSON.stringify({ id: userId, name, email })
        );
        sessionStorage.setItem(
          'user',
          JSON.stringify({ id: userId, name, email })
        );
        window.alert('You have successfully signed up! Please login.');
        // window.alert('회원가입 성공. 가입한 아이디로 로그인해주세요');
        navigate('/login');
      } catch {
        window.alert('Sorry, something went wrong. Please try again.');
        // window.alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
      }
    }
    return setErrors(error);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormRow>
        <S.JoinLabel htmlFor='userId'>ID</S.JoinLabel>
        <S.JoinInput
          type='text'
          id='userId'
          name='userId'
          value={userId}
          onChange={handleChange}
        />
        {errors.userId && <S.Validation>{errors.userId}</S.Validation>}
      </S.FormRow>
      <S.FormRow>
        <S.JoinLabel htmlFor='password'>Password</S.JoinLabel>
        <S.JoinInput
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        {errors.password && <S.Validation>{errors.password}</S.Validation>}
      </S.FormRow>
      <S.FormRow>
        <S.JoinLabel htmlFor='password2'>Confirm Password</S.JoinLabel>
        <S.JoinInput
          type='password'
          id='password2'
          name='password2'
          value={password2}
          onChange={handleChange}
        />
        {errors.password2 && <S.Validation>{errors.password2}</S.Validation>}
      </S.FormRow>
      <S.FormRow>
        <S.JoinLabel htmlFor='name'>Name</S.JoinLabel>
        <S.JoinInput
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={handleChange}
        />
        {errors.name && <S.Validation>{errors.name}</S.Validation>}
      </S.FormRow>
      <S.FormRow>
        <S.JoinLabel htmlFor='email'>E-mail</S.JoinLabel>
        <S.JoinInput
          type='text'
          id='email'
          name='email'
          value={email}
          onChange={handleChange}
        />
        {errors.email && <S.Validation>{errors.email}</S.Validation>}
      </S.FormRow>
      <S.JoinButton type='submit' disabled={!isSubmittable}>
        Sign Up
      </S.JoinButton>
    </S.Form>
  );
};
