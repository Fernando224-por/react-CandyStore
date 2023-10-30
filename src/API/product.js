import axios from './axios.js'
export const requestProduct = product => axios.post(`/newProduct`, product)
export const requestProductSeller = () => axios.get(`/sellerProducts`)
export const requestProductGuest = () => axios.get(`/guestProducts`)