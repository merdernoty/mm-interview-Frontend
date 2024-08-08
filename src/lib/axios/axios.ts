import axios from 'axios'

export const axiosURL = axios.create({
    baseURL: 'https://meowmentor.xyz/api',
})
