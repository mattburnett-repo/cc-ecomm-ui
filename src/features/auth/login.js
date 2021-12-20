import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { localAuthLogin, selectIsAuthorized } from './authSlice';

import LoginDisplay from "../../components/auth/LoginDisplay";

export default function Login () {
    // get data from API / Redux
    //      just get test output in console from reducer, for now
    const isAuthorized = useSelector(selectIsAuthorized);

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch should be called from form submit / oauth button click, not on load, here
        // dispatch(localAuthLogin({username: 'asdf', password: 'asdf'})); // this should pass / fulfill / isAuthorized: true
        dispatch(localAuthLogin({username: 'qwer', password: 'qwer'})); // this should fail / reject / isAuthorized: false
    }, [dispatch]);
    
    // xx-auth and login button should dispatch actions to redux
    
    // create onClick function/s for google / github / local logins
    if(isAuthorized) {
        return (
            <div>
                <h1>login.js sees authorization</h1>
                <h2>should redirect to dashboard</h2>            
            </div>
        )
    } else {
        return <LoginDisplay />
    }
}