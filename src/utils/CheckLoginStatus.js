
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { selectIsAuthenticated } from '../features/auth/authSlice'

export default function CheckLoginStatus () {
    // eslint-disable-next-line
    const isLoggedIn = useSelector(selectIsAuthenticated);

    const history = useHistory()

    if(!isLoggedIn) {
        history.push('/login')

        return false
    } else {
        return true;
    }
}        
