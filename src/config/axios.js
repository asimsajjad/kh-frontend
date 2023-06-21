import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
console.log('Sessionn', sessionStorage.getItem('user'));
if(sessionStorage.getItem('user')){
    const {token} = JSON.parse(sessionStorage.getItem('user'))
    axios.defaults.headers.authorization = `Bearer ${token}`
}
export default axios