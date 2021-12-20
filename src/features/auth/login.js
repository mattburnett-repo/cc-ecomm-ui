import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsAuthorized, authLocalLoginTestOutput } from './authSlice';

import LoginDisplay from "../../components/auth/LoginDisplay";

export default function Login () {
    // get data from API / Redux?
    //      just get test output in console from reducer, for now
    const isAuthorized = useSelector(selectIsAuthorized);
    const dispatch = useDispatch();

    console.log('login.js isAuthorized ' + isAuthorized);

    useEffect(() => {
        dispatch(authLocalLoginTestOutput())
    })
    

    // xx-auth and login button should dispatch actions to redux
    
    // create onClick function/s for google / github / local logins
    if(isAuthorized) {
        return <h1>login.js sees authorization</h1>
    } else {
        return <LoginDisplay />
    }
}