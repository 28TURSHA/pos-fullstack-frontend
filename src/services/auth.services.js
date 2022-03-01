import axios from 'axios';
const API_URL = 'https://pos-fullstack-backend.herokuapp.com/auth/';
class AuthService{
  async login(user) {
    return axios
      .post(API_URL + 'signin', {
        fullname: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() { 
    localStorage.removeItem('user');
  }
  register(user) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    return axios.post(API_URL + 'signup', {
      fullname: user.username,
      email: user.email,
      password: user.password,
      phone_number: user.telephone
    });
  }
};

export default new AuthService();