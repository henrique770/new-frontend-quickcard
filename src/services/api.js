import axios from 'axios';

const api = axios.create({
  //baseURL: 'https://quickcard-io.herokuapp.com/api/v1',
  //baseURL: 'http://179.251.247.68:3000/api/v1',
  baseURL: 'http://localhost:3000/api/v1',
});

export default api;
