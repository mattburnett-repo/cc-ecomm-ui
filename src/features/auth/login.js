import { useDispatch, useSelector } from 'react-redux';

import { localAuthLogin, selectIsAuthenticated } from './authSlice';

import LoginDisplay from "../../components/auth/LoginDisplay";
import Dashboard from '../../features/dashboard/dashboard'

export default function Login () {
    const isAuthorized = useSelector(selectIsAuthenticated); // FIXME: make sure this connects to Paasport.isAuthenticated() / req.body thing.

    const dispatch = useDispatch();

    // TODO: xx-auth and login button should also dispatch actions to redux
    function handleClick() {
        alert('handle click')
    }
    function handleLogin(e) {
        e.preventDefault();

        let username = e.target.username.value
        let password = e.target.password.value

        dispatch(localAuthLogin({username, password}));
    }
    function handleRegister(e) {
        alert('handle register')
    }

    function loginProps() {
        return {
            handleClick: handleClick,
            handleLogin: handleLogin,
            handleRegister: handleRegister
        }
    }
    
    if(!isAuthorized) {
        return <LoginDisplay handlers={loginProps()} />
    } else {
        return <Dashboard />
    }
    
}