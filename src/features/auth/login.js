import { useDispatch, useSelector } from 'react-redux';

import { localAuthLogin, selectIsAuthenticated } from './authSlice';

import LoginDisplay from "../../components/auth/LoginDisplay";
import Dashboard from '../../features/dashboard/dashboard'

export default function Login () {
    const isAuthorized = useSelector(selectIsAuthenticated); // FIXME: make sure this connects to Passport.isAuthenticated() / req.body thing.

    const dispatch = useDispatch();

    // TODO: xx-auth and login button should also dispatch actions to redux
    function handleClick() {
        // redirect to appropriate auth component, zB
        // <p class="lead mt-4">
        //     No Account? <a href="/register">Register</a>
        // </p>
        alert('handle click')
    }
    function handleLogin(e) {
        e.preventDefault();

        let username = e.target.username.value
        let password = e.target.password.value

        dispatch(localAuthLogin({username, password}));
    }


    function handlers() {
        return {
            handleClick: handleClick,
            handleLogin: handleLogin,
        }
    }
    
    if(!isAuthorized) {
        return <LoginDisplay handlers={handlers()} />
    } else {
        return <Dashboard />
    }
    
}