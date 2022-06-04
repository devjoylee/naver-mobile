export const fetchLogin = async ({ id, password }) => {
  const response = await fetch('http://localhost:3000/users', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }); // http 요청

  if (response.ok) {
    const users = await response.json();
    const user = users.find((user) => user.id === id);

    if (!user) {
      throw new Error('가입된 유저 정보가 없습니다.');
    }

    if (user.password !== password) {
      throw new Error('비밀번호가 틀립니다.');
    }

    return user;
  }

  throw new Error('일시적인 에러가 발생했습니다. 잠시후 다시 시도해주세요');
};
