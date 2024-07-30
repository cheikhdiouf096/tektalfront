// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Remplacez par l'URL de votre backend
});

export const register = async (data) => {
  return await api.post('/register', data);
};

export const login = async (data) => {
  return await api.post('/login', data);
};

export const logout = async (token) => {
  return await api.post('/logout', {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const recoverPassword = async (data) => {
  return await api.post('/recover-password', data);
};

export default api;
