import { useDispatch, useSelector } from 'react-redux';

import { localAuthLogin, selectIsAuthorized } from './authSlice';

import LoginDisplay from "../../components/auth/LoginDisplay";

export default function Login () {
    const isAuthorized = useSelector(selectIsAuthorized);

    const dispatch = useDispatch();

    function handleClick (e) {
        e.preventDefault();

        let username = e.target.username.value
        let password = e.target.password.value

        dispatch(localAuthLogin({username, password}));
    }
    
    // xx-auth and login button should also dispatch actions to redux

    console.log('features/login isAuthorized: ' + isAuthorized)
 
    return <LoginDisplay handleClick={handleClick} />
}