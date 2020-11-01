import React from 'react'
import { useSelector } from 'react-redux'
import SpaceshipImage from '../assets/img/spacship.png'
import { Card } from 'react-bootstrap'

export const Spaceships = () => {
    const spaceships = useSelector(state => state.spaceships)
    
    return (
        (spaceships !== undefined && spaceships[0] !== undefined && spaceships[0].stops !== undefined) ? (
            <div className="spaceships-container">
                <div className="row justify-content-center">
                    {spaceships.map((spaceship) => (
                        spaceship.MGLT !== 'unknown' ? (
                            <Card key={spaceship.name} className="spaceship-card col-sm-5 col-md-4 col-lg-3 m-3">
                                <Card.Header style={{ backgroundImage: `url(${SpaceshipImage})`}}></Card.Header>
                                <Card.Body>
                                    <h4>{spaceship.name}</h4>
                                    <p>MGLT: {spaceship.MGLT}</p>
                                    {spaceship.distance !== '' ? (
                                        <p>Distância: {spaceship.distance} MGLT</p>
                                    ) : ''}
                                    {spaceship.stops !== '' ? (
                                        <p>Paradas: {spaceship.stops}</p>
                                    ) : ''}
                                </Card.Body>
                            </Card>
                        ) : (
                            <Card key={spaceship.name} className="spaceship-card col-sm-5 col-md-4 col-lg-3 m-3">
                                <Card.Header style={{ backgroundImage: `url(${SpaceshipImage})`}}></Card.Header>
                                <Card.Body>
                                    <h4>{spaceship.name}</h4>
                                    <p>MGLT: {spaceship.MGLT}</p>
                                </Card.Body>
                            </Card>
                        )
                    ))}
                </div>
            </div>

        ) : ""
    )
}
