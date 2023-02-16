import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const USERS_DATA = `${BASE_URL}/users`;
export const GET_WEBTOONS = `${BASE_URL}/webtoons`;
export const GET_RECOMMENDS = `${BASE_URL}/recommends`;

export const fetcher = (api) =>
  axios
    .get(api)
    .then((res) => res.data)
    .catch((error) => console.log(error));
