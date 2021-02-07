export const requestSignup = async (user) => {
  const response = await fetch('http://localhost:8888/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  return response.ok;
};
