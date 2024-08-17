import axios from 'axios'

export const axiosURL = axios.create({
    baseURL: 'http://localhost:5000/',
})
//baseURL:"http://localhost:5000/"
//baseURL: 'http://147.45.133.241:5000',
