import { useSelector } from 'react-redux'
import { selectIsAuthorized } from '../features/auth/authSlice'
// eslint-disable-next-line
import { Redirect } from 'react-router-dom'

export default function CheckLoginStatus () {
    // eslint-disable-next-line
    const isLoggedIn = useSelector(selectIsAuthorized);
    
    // FIXME: enable this after development
    // if(!isLoggedIn) {
    //     return <Redirect to='/' />
    // } else {
    //     return true;
    // }

    return true;
}        
