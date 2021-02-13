import React from 'react';
import {
  Form,
  FormRow,
  JoinLabel,
  JoinInput,
  JoinButton,
} from './Join.elements';
import useForm from './useForm';

function JoinForm() {
  const { values, handleChange, handleSubmit } = useForm();
  const { id, password, password2, name, email } = values;

  const isMatchedPassword = password === password2;
  const isSubmittable = isMatchedPassword && id && password && name;

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <JoinLabel htmlFor="id">아이디</JoinLabel>
        <JoinInput
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <JoinLabel htmlFor="password">비밀번호</JoinLabel>
        <JoinInput
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <JoinLabel htmlFor="password2">비밀번호 재확인</JoinLabel>
        <JoinInput
          type="password"
          id="password2"
          name="password2"
          value={password2}
          onChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <JoinLabel htmlFor="name">이름</JoinLabel>
        <JoinInput
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <JoinLabel htmlFor="email">이메일</JoinLabel>
        <JoinInput
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </FormRow>
      <JoinButton type="submit" disabled={!isSubmittable}>
        가입하기
      </JoinButton>
    </Form>
  );
}

export default JoinForm;
