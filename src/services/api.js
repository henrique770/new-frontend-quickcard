import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3000/api/v1',
  //baseURL: 'https://quickcard-io.herokuapp.com/api/v1',
});

export default api;
