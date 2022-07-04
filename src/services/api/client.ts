import axios from 'axios';

export const api = axios.create({
  baseURL: 'baseApiUrl',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const status = error.response.status;
    console.log(status);

    throw new Error(error);
  },
);

// TODO: Implement after BE
export const setApiToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};
