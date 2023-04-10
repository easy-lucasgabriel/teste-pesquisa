import axios from 'axios';

export const api = axios.create({ baseURL: 'http://54.76.180.109/'})

export const apidev = axios.create({ baseURL: 'https://pokeapi.co/api/v2/'})
