import { useDispatch, useSelector } from 'react-redux';

import { localAuthLogin, localAuthLogout, selectIsAuthorized, selectUserData } from './authSlice';

import LoginDisplay from "../../components/auth/LoginDisplay";

import Orders from '../../features/orders/orders'

export default function Login () {
    const isAuthorized = useSelector(selectIsAuthorized);
    const userData = useSelector(selectUserData)

    const dispatch = useDispatch();

    // get data from API / Redux
    function handleClick (e) {
        e.preventDefault();

        // yes, it is true that React components should use state instead of these types of vars,
        //      but since we separate the display from the functionality / feature, we don't have
        //      a single place to keep state. Therefore we don't have, in this case, a 'single authority' location.
        //      Components like the Cart need state in the display component, because of user-editing,
        //          but here it just doesn't make sense to bolt on additional code just to 
        //          'do it the way everybody else does'. This does what is required ->
        let username = e.target.username.value
        let password = e.target.password.value

        dispatch(localAuthLogin({username, password}));
    }

    function handleLogout (e) {
        dispatch(localAuthLogout());
    }
    
    // xx-auth and login button should also dispatch actions to redux

    if(isAuthorized) { // FIXME: test this branch of the render. maybe this is an integration test...
        return (
            <>
                <div>
                    <h1>login.js sees authorization</h1>
                    <h2>should redirect to dashboard</h2>    
                    <h3>user id: {userData.user_id} username: {userData.username} email: {userData.email}</h3>
                    <Orders />
                </div>
                <div>
                    <br />
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            </>
        )
    } else { 
        return <LoginDisplay handleClick={handleClick} />
    }
}