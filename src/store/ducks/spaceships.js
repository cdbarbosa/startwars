import { createActions, createReducer } from 'reduxsauce'

const INITIAL_STATE = []

export const { Types, Creators } = createActions({
    getSpaceships: ['spaceship'],
    countSpaceships: ['value']
})

const get = (state = INITIAL_STATE, action) => action.spaceship
const count = (state = INITIAL_STATE, action) => {}


export default createReducer(INITIAL_STATE, {
    [Types.GET_SPACESHIPS]: get,
    [Types.COUNT_SPACESHIPS]: count
})

