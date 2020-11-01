import React from 'react'
import { useSelector } from 'react-redux'

import { Card } from 'react-bootstrap'

export const Spaceships = () => {
    const spaceships = useSelector(state => state.spaceships)
    
    return (
        <div className="spaceships-container">
            <div className="row">
                {spaceships.map((spaceship) => (
                    spaceship.MGLT !== 'unknown' ? (
                        <Card key={spaceship.name} className="col-sm-12 col-md-4 col-lg-2 m-3 ">
                            <Card.Header></Card.Header>
                            <textarea value={JSON.stringify(spaceship, null, 4)} style={{ height: '50vh'}}></textarea>
                            <Card.Body>
                                {/* <h4>{spaceship.name}</h4>
                                <p>MGLT: {spaceship.MGLT}</p>
                                <p>size: {spaceship.length}</p>
                                <p>max_atmosphering_speed: {spaceship.max_atmosphering_speed}</p> */}
                            </Card.Body>
                        </Card>
                    ) : ""
                ))}
            </div>
        </div>
    )
}
