import axios from 'axios'

const api = axios.create({
    baseURL:'http//localhost:3000'//backend
})

//toda vez que eu fizer uma chamada quero enviar o token neka

export default api;