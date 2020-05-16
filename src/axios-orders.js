import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-burger-react.firebaseio.com/',
});

export default instance;
