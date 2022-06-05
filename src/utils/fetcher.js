export const fetcher = (api) =>
  fetch(api)
    .then((res) => res.json())
    .catch((err) => console.log(err));
