import React, { useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from 'contexts/UserContext';
import { requestLogin } from 'utils/requestLogin';
import { MdPersonOutline, MdLockOutline } from 'react-icons/md';
import useForm from 'hooks/useForm';

export const LoginForm = () => {
  const { setUser } = useUserContext();
  const [error, setError] = useState('');
  const { values, handleChange } = useForm({
    id: '',
    password: '',
  });

  const navigate = useNavigate();
  const { id, password } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await requestLogin({ id, password }); // 로그인 요청
      setUser(user);
      navigate('/'); // 홈으로
    } catch (error) {
      setError(error.message);
    }
  };

  const isSubmittable = id && password;

  return (
    <S.LoginForm onSubmit={handleSubmit}>
      <S.InputContainer>
        <S.LoginInput className='id'>
          <S.Icon>
            <MdPersonOutline />
          </S.Icon>
          <input name='id' type='text' value={id} placeholder='아이디' onChange={handleChange} />
        </S.LoginInput>
        <S.LoginInput className='password'>
          <S.Icon>
            <MdLockOutline />
          </S.Icon>
          <input
            name='password'
            type='password'
            value={password}
            placeholder='비밀번호'
            onChange={handleChange}
          />
        </S.LoginInput>
      </S.InputContainer>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      <S.LoginButton disabled={!isSubmittable}>로그인</S.LoginButton>
    </S.LoginForm>
  );
};
