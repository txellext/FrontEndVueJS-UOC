import axios from 'axios'

const myAPI = axios.create({
    baseURL:'https://pokeapi.co/api/v2',
    withCredentials:false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }

})

export default {

    // getPokemons() {
    //     let randomNum = -1;
    //     let randomNumArray = [];
    //     let i=0;
    //     const numMax = 10;
    //     let pokemons = [];

    //     while (!randomNumArray.includes(randomNum) || i < numMax) {

    //         randomNum = Math.round(Math.random() * 1010);
        
    //         randomNumArray.push(randomNum);

    //         pokemons.push(myAPI.get(`/pokemon/${randomNum}`));
    //         // return myAPI.get('/photos?_limit=10');
    //         i++;
    //     }
    //     console.log(randomNumArray);
    //     console.log(pokemons);
    //     return pokemons;
    // },

    getPokemons() {
        return myAPI.get('/pokemon?_limit=10')
    },

    getSingleCard(id)  {
        // return myAPI.get('/photos/'+id);
        return myAPI.get(`/pokemon/${id}`);
    }
}