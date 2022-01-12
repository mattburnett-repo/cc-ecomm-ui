
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { clearCurrentCart } from '../../features/carts/currentCartActions';
import { clearCurrentOrder } from '../../features/orders/currentOrderActions';

import { StyledErrorDisplay } from '../styles/ErrorDisplay.styled'

export default function ErrorDisplay() {
    const history = useHistory()
    const dispatch = useDispatch()

    function clearCurrent() {
        dispatch(clearCurrentCart())
        dispatch(clearCurrentOrder()) 
    }

    function handleErrorExit() {
        clearCurrent()
        history.push('/')
    }

    return (
        <StyledErrorDisplay>
            <h3>There was an error. Sorry about that; we're working on it.</h3>
            <button onClick={handleErrorExit()}>Home</button>
        </StyledErrorDisplay>
    )
}
