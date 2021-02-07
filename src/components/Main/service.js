export const fetchWebtoons = async () => {
  const response = await fetch('http://localhost:8888/webtoons');

  if (response.ok) {
    return response.json();
  }

  return [];
};
