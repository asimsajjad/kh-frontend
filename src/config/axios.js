import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
console.log('Sessionn', localStorage.getItem('user'));
if(localStorage.getItem('user')){
    const {token} = JSON.parse(localStorage.getItem('user'))
    axios.defaults.headers.authorization = `Bearer ${token}`
}
export default axios