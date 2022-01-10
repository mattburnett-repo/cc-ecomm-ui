
import { useContext } from 'react'
import { LoginMessageContext } from "../../features/auth/login";

export default function LoginDisplay ( props ) {
    const { handleClick, handleLogin } = props.handlers;

    const theApiUrl = process.env.REACT_APP_API_BASE_URL
    const theGoogleUrl = `${theApiUrl}/api/v1/auth/google`

    const message = useContext(LoginMessageContext)

    return (
        <div role="presentation" aria-label="login-display">
            <div role="presentation" aria-label="oauth">
                <div><a href={theGoogleUrl} aria-label="google-auth">Log in with Google</a></div>
                {/* <div><a href="/auth/github" aria-label="github-auth" onClick={handleClick}>Log in with GitHub</a></div>    */}
            </div>
            <div role="presentation" aria-label="login-display-form">
                {(message && <div role="presentation" aria-label='login-error-message'>{message}</div>)}
                <form onSubmit={handleLogin} method="post">
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input id="username" aria-label="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" aria-label="password" />
                    </div>
                    <div>
                        <button type="submit" aria-label="login">Log in</button>
                    </div>
                </form>  
            </div>
            <div role="presentation" aria-label="register">
                <label htmlFor="register">Don't have an account yet? </label>
                <a href='/register' id="register" aria-label="register-link">Register</a>
            </div>       
        </div>
    )
}