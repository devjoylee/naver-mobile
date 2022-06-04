export const fetchWebtoons = async () => {
  const response = await fetch('http://localhost:3000/webtoons', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  if (response.ok) {
    return response.json();
  }

  return [];
};

export const fetchRecommend = async () => {
  const response = await fetch('http://localhost:3000/recommend', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  if (response.ok) {
    return response.json();
  }
};
