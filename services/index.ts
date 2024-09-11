import axios from 'axios';

export const client = () => {
  const instance = axios.create({
    baseURL: 'https://edu.eclab.me/api',
    headers: { 'Content-Type': 'application/json' },
  });

  instance.interceptors.request.use(
    async (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (res) => res,
    async (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};
