import axios from 'axios';


export const httpRequest = axios.create({
  baseURL : 'http://localhost:1234',
  headers : {
    "Content-Type" : "application/json",
  }
});