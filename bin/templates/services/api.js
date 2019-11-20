import axios from 'axios';

const api = axios.create({
  baseURL: {host},
});

export default api;
