import { useDispatch, useSelector } from 'react-redux';

import { localAuthLogin, selectIsAuthenticated } from './authSlice';

import LoginDisplay from "../../components/auth/LoginDisplay";
import Dashboard from '../../features/dashboard/dashboard'

export default function Login () {
    const isAuthorized = useSelector(selectIsAuthenticated); // FIXME: make sure this connects to Paasport.isAuthenticated() / req.body thing.

    const dispatch = useDispatch();

    // TODO: xx-auth and login button should also dispatch actions to redux
    function handleClick (e) {
        e.preventDefault();

        let username = e.target.username.value
        let password = e.target.password.value

        dispatch(localAuthLogin({username, password}));
    }

    // console.log('isAuthorized: ' + isAuthorized)
    
    if(!isAuthorized) {
        return <LoginDisplay handleClick={handleClick} />
    } else {
        return <Dashboard />
    }
    
}