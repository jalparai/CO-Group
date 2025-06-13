import axios from "axios";


const baseURL = 'https://cod-backend-main.vercel.app/';
// const baseURL = 'http://localhost:3001/';
const apiclient = axios.create({
  baseURL: baseURL,
});



export { apiclient };


