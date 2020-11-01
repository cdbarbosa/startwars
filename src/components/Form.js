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
        <div className="content-form d-flex flex-column justify-content-center align-items-center">
            <p className="w-75 text-center">Digite o valor de uma distância em mega lights e descubra a quantidade de paradas que as naves de Star Wars precisariam fazer para concluir essa distância</p>
            <div className="component-form">
                <input className="form-control" type="number" min="1" placeholder="text here" name="value_distance" onInput={e => handleInputChange(e)}/>
                <button className="btn btn-calculate" onClick={() => submit()}>calculate</button>
            </div>
        </div>
    )
}
