import axios from 'axios'

export default (service) => {
    if (service == 'calc1') {
        return axios.create({
            baseURL: (process.env.CALC1_URL !== undefined) ? process.env.CALC1_URL : 'http://localhost:9000/api/calc1',
            withCredentials: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
    else if (service == 'calc2') {
        return axios.create({
            baseURL: (process.env.CALC2_URL !== undefined) ? process.env.CALC2_URL : 'http://localhost:9001/api/calc2',
            withCredentials: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
    else if (service == 'storage') {
        return axios.create({
            baseURL: (process.env.STORAGE_URL !== undefined) ? process.env.STORAGE_URL : 'http://localhost:8000/api/storage',
            withCredentials: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
}