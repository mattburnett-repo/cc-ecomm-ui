import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { localAuthLogin, selectIsAuthorized } from './authSlice';

import LoginDisplay from "../../components/auth/LoginDisplay";

export function handleClick (e) {
    e.preventDefault();
    console.log('login / LoginDisplay handleClick() called by clicking: ' + e.target.text);
}

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

    if(isAuthorized) { // FIXME: test this branch of the render
        return (
            <div>
                <h1>login.js sees authorization</h1>
                <h2>should redirect to dashboard</h2>            
            </div>
        )
    } else { // TODO: create onClick function/s for google / github / local logins
        return <LoginDisplay handleClick={handleClick} />
    }
}