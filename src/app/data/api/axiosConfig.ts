import axios from "axios"

export const fetchDefault = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  headers:{
    accept: 'application/json',
  },
})