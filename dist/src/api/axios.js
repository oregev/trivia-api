import axios from 'axios';
export const axiosFn = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});
