import axios from 'axios'

export const api =  {
    getShips: (endpoint) => {
        endpoint.replace('http', 'https')
        return axios.get(endpoint)
    }
}


