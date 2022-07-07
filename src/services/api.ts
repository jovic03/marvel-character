import axios from 'axios'

const api = axios.create({
    baseURL:'http//localhost:3000'//backend
})

//toda vez que eu fizer uma chamada quero enviar o token nela
//fez login --> backend--> token jwt(json web token)-->front -->token jwt -->backend-->front

//intercepta as chamadas PARA o backend
api.interceptors.request.use((config: any) => {
    try {
      const token = localStorage.getItem('jwtLocalStorage');
      if(token) {
        config.headers.Authorization = `Bearrer ${token}`
      }
      return config
    } catch (error: any) {
      console.log(error);
    }
  })
  
  
  export default api;