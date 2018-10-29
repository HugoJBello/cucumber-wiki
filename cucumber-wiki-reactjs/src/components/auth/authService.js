import axios from 'axios';
const BASE_URL = 'http://hbello.info';

export { login, register };

const login = (credentials) => {
    const url = `${BASE_URL}/security/login`;
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    return axios.post(url, credentials).then(response => response.data);
}

const logout = () => {
    localStorage.setItem('jwtToken', null);
}

const register = (credentials) => {
    const url = `${BASE_URL}/security/signup`;
    return axios.post(url, credentials).then(response => response.data);

}