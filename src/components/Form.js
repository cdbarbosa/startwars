import React  from 'react'
import { useSelector } from 'react-redux'

export const Form = () => {
    const spaceships = useSelector(state => state.spaceships)
    
   
    return (
        <>
            <input placeholder="text here"/>
            <button>Call api</button>
        </>
    )
}
