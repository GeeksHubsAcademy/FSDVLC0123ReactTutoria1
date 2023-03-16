
import axios from 'axios';

const root = "https://expressmongooseauthjwt-production.up.railway.app"

export const logMe = async (body) => {

    return await axios.post(`${root}/api/auth/login`, body);
} 