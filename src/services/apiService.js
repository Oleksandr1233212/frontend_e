import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export default {
  getUsers() {
    return axios.get(`${API_URL}/users`);
  },
  getPosts() {
    return axios.get(`${API_URL}/posts`);
  },
  getComments() {
    return axios.get(`${API_URL}/comments`);
  },
};