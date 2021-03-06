
import { useContext } from 'react'
import { RegisterMessageContext } from "../../features/auth/register";

import { StyledAuth } from '../styles/Auth.styled';

export default function Register( props ) {
    const { handleRegister } = props.handlers
    const message = useContext(RegisterMessageContext)

    const theApiUrl = process.env.REACT_APP_API_BASE_URL
    // eslint-disable-next-line
    const theGoogleUrl = `${theApiUrl}/api/v1/auth/google`

    return (
        <StyledAuth>
            <div role="presentation" aria-label="register-display">
                {/* <div role="presentation" aria-label="oauth"> */}
                    {/* TODO: implement OAuth <button onClick={theGoogleUrl} id="google-auth-button" aria-label="google-auth">Log in with Google</button> */}
                    {/* <div><a href="/auth/github" aria-label="github-auth" onClick={handleClick}>Log in with GitHub</a></div>    */}
                {/* </div>
                <br/>*/}
                <div id="auth-header" role="presentation" aria-label='register-header'>Register</div>
                <br/> 
                <div role="presentation" aria-label="register-display-form">
                    {(message && <div id="register-error-message" role="presentation" aria-label='register-error-message'>{message}</div>)}
                    <form onSubmit={handleRegister} method="post">
                        <div>
                            <input name="username" aria-label="username" placeholder="User name" required />
                        </div>
                        <div>
                            <input name="email" type="email" aria-label="email" placeholder="Email adddress" required />
                        </div>
                        <div>
                            <input name="password" type="password" aria-label="password" data-testid="password" placeholder="Password" required />
                        </div>
                        <div>
                            <input name="password2" type="password" aria-label="password-verify" data-testid="password-verify" placeholder="Re-enter Password" required />
                        </div>
                        <br />
                        <div>
                            <button type="susbmit" aria-label="register-button">Register</button>
                        </div>
                    </form>
                </div> 
                <div role="presentation" aria-label="login">
                    <label htmlFor="login">Already have an account? </label>
                    <a href='/login' id="login" aria-label="login-link">Login</a>
                </div>
            </div>
        </StyledAuth>
    )
}