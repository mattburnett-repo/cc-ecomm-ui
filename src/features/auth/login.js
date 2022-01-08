
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

    // TODO: xx-auth and login button should also dispatch actions to redux
    function handleClick() {
        alert('handle click')
    }
    async function handleLogin(e) {
        e.preventDefault();

        let username = e.target.username.value
        let password = e.target.password.value

        try {
            let msg = await dispatch(localAuthLogin({username, password}));

            if(msg.meta.requestStatus === 'rejected') {
                setMessage('This user can\'t log in. \nYou can try again, or create a new login \nby clicking the \'Register\' link')
            } else {
                setMessage('')
            }
        } catch(e) {
            console.log('login.js error: ', e)
        }
    } // end handleLogin

    function handlers() {
        return {
            handleClick: handleClick,
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
