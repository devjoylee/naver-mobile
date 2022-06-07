export const fetcher = (api) =>
  fetch(api, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
