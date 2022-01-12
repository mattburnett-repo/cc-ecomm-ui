
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { localAuthLogout } from '../features/auth/authSlice'

export default function GoToCheckoutButton() {
    const history = useHistory()
    const dispatch = useDispatch()

    function handleLogoutClick() {
        dispatch(localAuthLogout())
        history.push('/')
    } 

    return (
        <button aria-label="logout-button" onClick={handleLogoutClick()}>Log Out</button>
    )
}