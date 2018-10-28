import axios from 'axios';

const BASE_URL = 'http://hbello.info';

export { getEntries, getEntry };

const getEntry = (entryName) => {
    const url = `${BASE_URL}/entries/entry/name=${entryName}`;
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    return axios.get(url).then(response => response.data);
}

const getEntries = (limit, skip) => {
    const url = `${BASE_URL}/entries/entries_list/limit=${limit}&skip=${skip}`;
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    return axios.get(url).then(response => response.data);
}
