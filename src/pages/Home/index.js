import React, { useEffect } from 'react'
import { Form } from '../../components/Form'
import { Spaceships } from '../../components/Spaceships'
import { useDispatch } from 'react-redux'
import { Creators as SpaceshipActions } from '../../store/ducks/spaceships'
import { api } from '../../services/starwarsApi'

import { ToastProvider } from 'react-toast-notifications'

import Starwars from '../../assets/img/starwars.svg'
import Ship from '../../assets/img/ship.svg'

export const Home = () => {
    const dispatch = useDispatch()
    const object = []

    const handleFunction = async (endpoint) => {
        await api.getShips(endpoint).then((result) => {
            handleConsole(result.data.results, result.data.next)
            if (result.data.next !== null) {
                handleFunction(result.data.next)
            }
        })
    }
    const handleConsole = (obj, next) => {
        object.push(...obj)
        if (next === null) {
            dispatch(SpaceshipActions.getSpaceships(object))
        }
    }
    
    useEffect(() => {
        handleFunction('https://swapi.dev/api/starships')
    })
    return (
        <div className="content">
            <div className="component-header">
                <img src={Starwars} alt="star wars"/>
                <div className="component-header__icon">
                    <img src={Ship} alt="spaceship"/>
                </div>
            </div>
            <div className="component-body">
                <ToastProvider placement="bottom-right" autoDismiss={true}>
                    <Form />
                </ToastProvider>
                <Spaceships />
            </div>
        </div>
    )
}
