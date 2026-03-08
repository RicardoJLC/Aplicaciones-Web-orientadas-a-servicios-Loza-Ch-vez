import api from './api';

export const loginService = async ({ username, password }) => {
  const resp = await api.post('/auth/login', { username, password });
  return resp.data; 
};