import axios from 'axios'

// const endpoint = 'https://swapi.dev/api/'

export const api =  {
    getShips: (endpoint) => {
        return axios.get(endpoint)
    }
}


