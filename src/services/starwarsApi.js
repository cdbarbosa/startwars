import axios from 'axios'

// const endpoint = 'https://swapi.dev/api/'

export const api =  {
    getShips: (endpoint) => {
        endpoint.replace('http', 'https')
        return axios.get(endpoint)
    }
}


