import  axios from 'axios';
const api_key ='475101f9539bd8382a797e10bafa9205'
const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params:{
    api_key
  }
})

export  default movieDB;
