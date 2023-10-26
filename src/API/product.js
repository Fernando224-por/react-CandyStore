import axios from './axios.js'
export const postProducts = product => axios.post(`/newProduct`, product)
