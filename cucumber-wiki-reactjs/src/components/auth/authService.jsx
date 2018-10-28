import axios from 'axios';

const BASE_URL = 'http://hbello.info';

export { login, register };

const login = (username, password) => {
    const url = `${BASE_URL}/security/login`;
    //axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    //return axios.get(url).then(response => response.data);
}

const logout = () => {
}

const register = () => {
    const url = `${BASE_URL}/security/signup`;

}
