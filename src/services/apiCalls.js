
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

export const bringMoviesByTitle = async (criteria) => {

  return await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&query=${criteria}&page=1&include_adult=false`)



}