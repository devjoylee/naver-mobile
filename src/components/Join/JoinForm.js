import React from 'react';
import {
  Form,
  FormRow,
  JoinLabel,
  JoinInput,
  Validation,
  JoinButton,
} from './elements/Form.js';
import useForm from './useForm';
import validate from './validation';

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
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <JoinLabel htmlFor="id">아이디</JoinLabel>
        <JoinInput
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={handleChange}
          placeholder="id"
        />
        {errors.id && <Validation>{errors.id}</Validation>}
      </FormRow>
      <FormRow>
        <JoinLabel htmlFor="password">비밀번호</JoinLabel>
        <JoinInput
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="password"
        />
        {errors.password && <Validation>{errors.password}</Validation>}
      </FormRow>
      <FormRow>
        <JoinLabel htmlFor="password2">비밀번호 재확인</JoinLabel>
        <JoinInput
          type="password"
          id="password2"
          name="password2"
          value={password2}
          onChange={handleChange}
          placeholder="Confirm password"
        />
        {errors.password2 && <Validation>{errors.password2}</Validation>}
      </FormRow>
      <FormRow>
        <JoinLabel htmlFor="name">이름</JoinLabel>
        <JoinInput
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="name"
        />
        {errors.name && <Validation>{errors.name}</Validation>}
      </FormRow>
      <FormRow>
        <JoinLabel htmlFor="email">이메일</JoinLabel>
        <JoinInput
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="email"
        />
        {errors.email && <Validation>{errors.email}</Validation>}
      </FormRow>
      <JoinButton type="submit">가입하기</JoinButton>
    </Form>
  );
}

export default JoinForm;
