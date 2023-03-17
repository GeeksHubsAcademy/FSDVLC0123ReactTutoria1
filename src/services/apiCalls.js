
import axios from 'axios';

const root = "https://expressmongooseauthjwt-production.up.railway.app"

export const logMe = async (body) => {

    return await axios.post(`${root}/api/auth/login`, body);
} 

export const bringUsers = async (token) => {
    let config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };

    return await axios.get(`${root}/api/users`, config);
}