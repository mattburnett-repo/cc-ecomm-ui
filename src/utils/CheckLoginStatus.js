import { useSelector } from 'react-redux'
import { selectIsAuthorized } from '../features/auth/authSlice'
import { Redirect } from 'react-router-dom'

export default function CheckLoginStatus () {
    const isLoggedIn = useSelector(selectIsAuthorized);
    
    // FIXME: enable this after developments
    // if(!isLoggedIn) {
    //     return <Redirect to='/' />
    // }
    
    return true;
}        
