import React from 'react';
import * as S from './styles';
import useForm from 'hooks/useForm';
import validate from 'utils/validation';

function JoinForm() {
  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      id: '',
      password: '',
      password2: '',
      name: '',
      email: '',
    },
    validate
  );

  const { id, password, password2, name, email } = values;

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormRow>
        <S.JoinLabel htmlFor='id'>아이디</S.JoinLabel>
        <S.JoinInput
          type='text'
          id='id'
          name='id'
          value={id}
          onChange={handleChange}
          placeholder='id'
        />
        {errors.id && <S.Validation>{errors.id}</S.Validation>}
      </S.FormRow>
      <S.FormRow>
        <S.JoinLabel htmlFor='password'>비밀번호</S.JoinLabel>
        <S.JoinInput
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={handleChange}
          placeholder='password'
        />
        {errors.password && <S.Validation>{errors.password}</S.Validation>}
      </S.FormRow>
      <S.FormRow>
        <S.JoinLabel htmlFor='password2'>비밀번호 재확인</S.JoinLabel>
        <S.JoinInput
          type='password'
          id='password2'
          name='password2'
          value={password2}
          onChange={handleChange}
          placeholder='Confirm password'
        />
        {errors.password2 && <S.Validation>{errors.password2}</S.Validation>}
      </S.FormRow>
      <S.FormRow>
        <S.JoinLabel htmlFor='name'>이름</S.JoinLabel>
        <S.JoinInput
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={handleChange}
          placeholder='name'
        />
        {errors.name && <S.Validation>{errors.name}</S.Validation>}
      </S.FormRow>
      <S.FormRow>
        <S.JoinLabel htmlFor='email'>이메일</S.JoinLabel>
        <S.JoinInput
          type='text'
          id='email'
          name='email'
          value={email}
          onChange={handleChange}
          placeholder='email'
        />
        {errors.email && <S.Validation>{errors.email}</S.Validation>}
      </S.FormRow>
      <S.JoinButton type='submit'>가입하기</S.JoinButton>
    </S.Form>
  );
}

export default JoinForm;
