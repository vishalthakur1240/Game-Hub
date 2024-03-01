import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '634f2f833b3a4377a1cb32936f0baeef'
    }
})