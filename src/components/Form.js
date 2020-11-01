import React, { useState }  from 'react'
import { useDispatch } from 'react-redux'
import { Creators as SpaceshipsActions } from '../store/ducks/spaceships'

export const Form = () => {
    const [value, setValue] = useState(0)
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        const { value } = e.target
        setValue(value)
    }

    const submit = () => {
        dispatch(SpaceshipsActions.countSpaceships(value))
    }
   
    return (
        <>
            <input type="number" min="1" placeholder="text here" name="value_distance" onInput={e => handleInputChange(e)}/>
            <button onClick={() => submit()}>calculate</button>
        </>
    )
}
