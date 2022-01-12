
import { useState, createContext } from 'react'

import RegisterDisplay from '../../components/auth/RegisterDisplay'

export const RegisterMessageContext = createContext()

export default function Register() {
    const [message, setMessage] = useState('')

    async function handleRegister(e) { // doing this with Redux is really messy and complicated. let's just send a fetch from here and get registration over with.
        e.preventDefault();
    
        // https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
       
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
        const apiEndpoint = '/api/v1/register/remote'
        const theUrl = API_BASE_URL + apiEndpoint

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value})
        };

        const response = await fetch(theUrl, requestOptions);
        const resStatus = response.status
        // const data = await response.json();

        if(resStatus === 200) {
            setMessage('Registration successful. Click the \'Login\' link to log in.')
        }
        if(resStatus === 400) {
            setMessage('This user already exists, \nbut you can try a different one.\nOr login using the link.')
        }
    }
    
    function handlers() {
        return {
            handleRegister: handleRegister,
        }
    }

    return (
        <RegisterMessageContext.Provider value={message}>
            <RegisterDisplay handlers={handlers()}/>            
        </RegisterMessageContext.Provider>
    )
}