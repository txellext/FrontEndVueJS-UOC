import axios from 'axios'

const myAPI = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    withCredentials:false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }

})

export default {
    getPokemons() {
        return myAPI.get('/photos?_limit=10');
    },

    getSinglePhoto( id)  {
        // return myAPI.get('/photos/'+id);
        return myAPI.get(`/photos/${id}`);
    }
}