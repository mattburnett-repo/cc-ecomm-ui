
import { StyledAuth } from '../styles/Auth.styled';

import { useContext } from 'react'
import { LoginMessageContext } from "../../features/auth/login";

export default function LoginDisplay ( props ) {
    const { handleLogin } = props.handlers;

    const theApiUrl = process.env.REACT_APP_API_BASE_URL
    // eslint-disable-next-line
    const theGoogleUrl = `${theApiUrl}/api/v1/auth/google`

    const message = useContext(LoginMessageContext)

    return (
        <StyledAuth>
            <div role="presentation" aria-label="login-display-container">
                {/* <div role="presentation" aria-label="oauth"> */}
                    {/* TODO: implement OAuth <button onClick={theGoogleUrl} id="google-auth-button" aria-label="google-auth">Log in with Google</button> */}
                    {/* <div><a href="/auth/github" aria-label="github-auth" onClick={handleClick}>Log in with GitHub</a></div>    */}
                {/* </div>
                <br/>*/}
                <div id="auth-header" role="presentation" aria-label='login-header'>Log In</div>
                <br/> 
                <div role="presentation" aria-label="login-display-form">
                    {(message && <div role="presentation" id="login-error-message" aria-label='login-error-message'>{message}</div>)}
                    <form onSubmit={handleLogin} method="post">
                        <div>
                            <input id="username" aria-label="username" placeholder="User name" required />
                        </div>
                        <div>
                            <input id="password" type="password" aria-label="password" data-testid="password" placeholder="Password" required />
                        </div>
                        <br />
                        <div>
                            <button type="submit" aria-label="login">Log in</button>
                        </div>
                    </form>  
                </div>
                <br/>
                <div role="presentation" aria-label="register">
                    <label htmlFor="register">Don't have an account yet? </label>
                    <a href='/register' id="register" aria-label="register-link">Register</a>
                </div>     
            </div>  
        </StyledAuth>
    )
}