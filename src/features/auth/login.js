
import { useState, createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { localAuthLogin, selectIsAuthenticated } from './authSlice';

import LoginDisplay from "../../components/auth/LoginDisplay";
import Dashboard from '../../features/dashboard/dashboard'

export const LoginMessageContext = createContext()

export default function Login () {
    const [message, setMessage] = useState('')

    const isAuthorized = useSelector(selectIsAuthenticated); // FIXME: make sure this is correctly from redux

    const dispatch = useDispatch();

    async function handleLogin(e) {
        e.preventDefault();

        let username = e.target.username.value
        let password = e.target.password.value

        try {
            let msg = await dispatch(localAuthLogin({username, password}));

            if(msg.meta.requestStatus === 'rejected') {
                setMessage('This user can\'t log in. kThe username/password might be wrong, or the server might be down.')
            } else {
                setMessage('')
            }
        } catch(e) {
            console.log('login error: ', e)
        }
    } // end handleLogin

    function handlers() {
        return {
            handleLogin: handleLogin,
        }
    }
    
    if(!isAuthorized) {
        return (
            <LoginMessageContext.Provider value={message}>
                <LoginDisplay handlers={handlers()} /> 
            </LoginMessageContext.Provider>          
        )
    } else {
        return <Dashboard />
    }
}
