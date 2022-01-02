import { useSelector } from 'react-redux'
import { selectIsAuthenticated} from '../features/auth/authSlice'
// eslint-disable-next-line
import { Redirect } from 'react-router-dom'

export default function CheckLoginStatus () {
    // eslint-disable-next-line
    const isLoggedIn = useSelector(selectIsAuthenticated);
    
    // FIXME: enable this after development. it doesn't really do anything right now
    if(!isLoggedIn) {
        return <Redirect to='/login' />
    } else {
        return true;
    }

    // return true;
}        
