import axios from 'axios'
import { uniquesNumbers } from '@/utils/getUniqueNumber'

const myAPI = axios.create({
    baseURL:'https://pokeapi.co/api/v2',
    withCredentials:false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }

})

export default {

    async getPokemons() {

        const arrayIds = uniquesNumbers(10)
        const arrayPokemons = []

        for(let i =0; i<arrayIds.length; i++) {
            const id= arrayIds[i]
            const { data } = await this.getSingleCard(id)
            arrayPokemons.push(data)
        }


        return arrayPokemons
    },

    getSingleCard(id){
        return myAPI.get(`/pokemon/${id}`)
    }
}