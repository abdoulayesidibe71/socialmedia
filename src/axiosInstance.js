import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true, //l'envoie des cookie
    baseURL: 'http://localhost:3001/'
  });

  export default axiosInstance;

