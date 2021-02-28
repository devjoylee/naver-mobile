export const fetchWebtoons = async () => {
  const response = await fetch('/webtoons');

  if (response.ok) {
    return response.json();
  }

  return [];
};

export const fetchRecommend = async () => {
  const response = await fetch('/recommend');

  if (response.ok) {
    return response.json();
  }
};
