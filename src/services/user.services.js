import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://pos-fullstack-backend.herokuapp.com/';
export default {
  getPublicContent() {
    return axios.get(API_URL + 'products', { headers: authHeader() });
  },
  
}