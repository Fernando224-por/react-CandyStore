import axios from './axios.js'

// se envia el registro de nuevos usuarios a la api
export const registerRequest = user => axios.post(`/newUser`, user)
// se envia el login a la api
export const loginRequest = user => axios.post(`/login`, user)
// ver profile del usuario
export const profileRequest = id => axios.get(`/profile/${id}`)
// se verifica el token generado en el back-end
export const verifyTokenRequest = () => axios.get(`/checkAuth`)
