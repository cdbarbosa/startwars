import React, { useState }  from 'react'
import { useDispatch } from 'react-redux'
import { Creators as SpaceshipsActions } from '../store/ducks/spaceships'
import { useToasts } from 'react-toast-notifications'

export const Form = () => {
    const [value, setValue] = useState(0)
    const dispatch = useDispatch()
    const { addToast } = useToasts()

    const handleInputChange = (e) => {
        const { value } = e.target
        setValue(value)
    }

    const submit = () => {
        if (value === 0 || value === '') {
            addToast('Você não pode submeter um formulário vazio', { appearance: 'error' })
            return
        }
        dispatch(SpaceshipsActions.countSpaceships(value))
    }
   
    return (
        <div className="content-form d-flex flex-column justify-content-center align-items-center">
            <p className="w-75 text-center">Digite o valor de uma distância em mega lights e descubra a quantidade de paradas que as naves de Star Wars precisariam fazer para concluir essa distância</p>
            <div className="component-form">
                <input className="form-control" type="number" min="1" placeholder="Entre com a distância em MGLT. Ex.: 100000" name="value_distance" onInput={e => handleInputChange(e)}/>
                <button className="btn btn-calculate" onClick={() => submit()}>calcular</button>
            </div>
        </div>
    )
}
