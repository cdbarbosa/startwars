import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SpaceshipImage from '../assets/img/spacship.png'
import { Card } from 'react-bootstrap'

import SyncLoader from 'react-spinners/SyncLoader'

export const Spaceships = () => {
    const spaceships = useSelector(state => state.spaceships)
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        if (spaceships !== undefined && spaceships[0] !== undefined && spaceships[0].stops !== undefined) {
            setTimeout(() => {
                setisLoading(false)
            }, 2000)
        }
    })
    return (
        (spaceships !== undefined && spaceships[0] !== undefined && spaceships[0].stops !== undefined) ? (
            isLoading ? (
                <div className="loading-component">
                    <SyncLoader 
                        size={40}
                        color={"#FFE81F"}
                        loading={isLoading}
                    />
                </div>
            ) : (
            <div className="spaceships-container">
                <div className="row justify-content-center">
                    {spaceships.map((spaceship) => (
                        <Card key={spaceship.name} className="spaceship-card col-sm-5 col-md-4 col-lg-3 m-3">
                            <Card.Header style={{ backgroundImage: `url(${SpaceshipImage})`}}></Card.Header>
                            <Card.Body>
                                <h4>{spaceship.name}</h4>
                                <p>MGLT: {spaceship.MGLT}</p>
                                {spaceship.MGLT !== 'unknown' ? (
                                    <>
                                        {spaceship.distance !== '' ? (
                                            <p>Distância: {spaceship.distance} MGLT</p>
                                        ) : ''}
                                        {spaceship.stops !== '' ? (
                                            <p>Paradas: {spaceship.stops}</p>
                                        ) : ''}
                                    </>

                                ) : ""}
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
            )
        ) : ""
    )
}
