import { v4 as uuidv4 } from 'uuid';
import { USERS_DATA } from 'utils/api';

export const requestSignup = async (user) => {
  const response = await fetch(USERS_DATA, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      id: uuidv4,
      userId: user.userId,
      password: user.password,
      name: user.name,
      profile: '',
    }),
  });

  return response.ok;
};
