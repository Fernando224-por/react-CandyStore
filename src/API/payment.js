import axios from './axios.js'
export const requestStripeKey = () => axios.get('/payment')
export const requestPaymentIntent = (payment) => axios.post('/payment', payment)
