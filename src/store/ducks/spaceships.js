import { createActions, createReducer } from 'reduxsauce'

const INITIAL_STATE = []

export const { Types, Creators } = createActions({
    getSpaceships: ['spaceship'],
    countSpaceships: ['value']
})

const handleReturnDays = (consum) => {
    let aux = consum.split(' ')
    switch(aux[1]) {
        case 'year': case 'years':
            return Number(aux[0]) * 365
        case 'month': case 'months':
            return Number(aux[0]) * 31
        case 'week': case 'weeks':
            return Number(aux[0]) * 7
        case 'day': case 'days':
            return Number(aux[0])
        default:
            break
    }
}

const get = (state = INITIAL_STATE, action) => action.spaceship
const count = (state = INITIAL_STATE, action) => {
    state.forEach((item) => {
        let days = handleReturnDays(item.consumables)
        let consum = action.value / (24 * Number(days) * Number(item.MGLT))
        item.stops = Math.round(consum)
    })

    return [...state]
   
}


export default createReducer(INITIAL_STATE, {
    [Types.GET_SPACESHIPS]: get,
    [Types.COUNT_SPACESHIPS]: count
})
