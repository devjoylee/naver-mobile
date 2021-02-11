export const fetchWebtoons = async () => {
  const response = await fetch('http://localhost:8888/webtoons');

  if (response.ok) {
    return response.json();
  }

  return [];
};

export const fetchRecommend = async () => {
  const response = await fetch('http://localhost:8888/recommend');

  if (response.ok) {
    return response.json();
  }
};
