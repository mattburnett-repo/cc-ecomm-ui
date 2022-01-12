
import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'

import { clearCurrentCart } from '../features/carts/currentCartActions';
import { clearCurrentOrder } from '../features/orders/currentOrderActions';
import { clearCurrentShippingInfo } from '../features/shipping/currentShippingActions';

import { localAuthLogout } from '../features/auth/authSlice'

export default function LogoutButton() {
    // const history = useHistory()
    const dispatch = useDispatch()

    function handleLogoutClick() {
        dispatch(clearCurrentCart())
        dispatch(clearCurrentOrder()) 
        dispatch(clearCurrentShippingInfo())
        dispatch(localAuthLogout())
        // history.push('/')
    } 

    return (
        <button aria-label="logout-button" onClick={handleLogoutClick}>Log Out</button>
    )
}

