import axios from 'axios';

export const post = async (url, params) => {
    const result = await axios.post(url, params);
    return result;
};

export const get = async (url, params) => {
    const result = await axios.get(url, params);
    return result;
};
