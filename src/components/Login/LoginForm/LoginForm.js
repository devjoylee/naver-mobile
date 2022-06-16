import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from 'contexts/UserContext';
import { requestLogin } from 'utils/requestLogin';
import { MdPersonOutline, MdLockOutline } from 'react-icons/md';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { Icon } from 'components/Common';
import useForm from 'hooks/useForm';
import * as S from './styles';

export const LoginForm = () => {
  const [focus, setFocus] = useState('');
  const [error, setError] = useState('');
  const [isKeptLogged, setIsKeptLogged] = useState('');

  const { setUser } = useUserContext();
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
      isKeptLogged && localStorage.setItem('user', JSON.stringify(user));
      navigate('/'); // 홈으로
    } catch (error) {
      setError(error.message);
    }
  };

  const isSubmittable = id && password;

  return (
    <S.LoginForm onSubmit={handleSubmit}>
      <S.InputContainer>
        <S.LoginInput
          onClick={(e) => setFocus(e.target.name)}
          className={focus === 'id' ? 'id focus' : 'id'}
        >
          <S.Icon className='icon'>
            <MdPersonOutline />
          </S.Icon>
          <input name='id' type='text' value={id} placeholder='아이디' onChange={handleChange} />
        </S.LoginInput>
        <S.LoginInput
          onClick={(e) => setFocus(e.target.name)}
          className={focus === 'password' ? 'password focus' : 'password'}
        >
          <S.Icon className='icon'>
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

      <S.KeepLoggedIn onClick={() => setIsKeptLogged((prev) => !prev)}>
        <Icon>
          {isKeptLogged ? <AiFillCheckCircle className='active' /> : <AiOutlineCheckCircle />}
        </Icon>
        <span>로그인 상태 유지</span>
      </S.KeepLoggedIn>
    </S.LoginForm>
  );
};
