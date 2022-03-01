import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://pos-fullstack-backend.herokuapp.com/';
export default {
  getPublicContent() {
    return axios.get(API_URL + 'products', { headers: authHeader() });
  },
  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  },
//   getModeratorBoard() {
//     return axios.get(API_URL + 'mod', { headers: authHeader() });
//   },
//   getAdminBoard() {
//     return axios.get(API_URL + 'admin', { headers: authHeader() });
//   }
}