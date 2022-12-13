import axios from 'axios';
import environment from '../../Models/env';

function logout() {
    let url =   `${environment.apiBaseUrl}/logout`;
    return axios.post(url, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
}

function getRoles() {
  let url = `${environment.apiBaseUrl}/roles`;
  return axios.get(url,{headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
}

export { logout, getRoles };