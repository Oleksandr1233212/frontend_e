import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';
const BACKEND_API_URL = 'http://localhost:5040/api/taskmanagerapp'
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
  BACKEND_API_URL
  
  
  
  
  

};
