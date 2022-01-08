
import { useContext } from 'react'
import { RegisterMessageContext } from "../../features/auth/register";


export default function Register( props ) {
    const { handleClick, handleRegister } = props.handlers
    const message = useContext(RegisterMessageContext)

    return (
        <div role="presentation" aria-label="register-display">
            <div role="presentation" aria-label="oauth">
                {/* FIXME: resolve href / onClick */}
                <div><a href="/auth/google" aria-label="google-auth" onClick={handleClick}>Log in with Google</a></div>
                <div><a href="/auth/github" aria-label="github-auth" onClick={handleClick}>Log in with GitHub</a></div>   
            </div>
            <div role="presentation" aria-label="register-display-form">
                {(message && <div role="presentation" aria-label='register-error-message'>{message}</div>)}
                <form onSubmit={handleRegister} method="post">
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input id="username" aria-label="username" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="email" aria-label="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" aria-label="password" />
                    </div>
                    <div>
                        <label htmlFor="password2">Re-enter password:</label>
                        <input id="password2" type="password" aria-label="password" />
                    </div>
                    <div>
                        <button type="susbmit" aria-label="register-button">Create Account</button>
                    </div>
                </form>
            </div> 
            <div role="presentation" aria-label="login">
                <label htmlFor="login">Already have an account? </label>
                <a href='/login' id="login" aria-label="login-link">Login</a>
            </div>
        </div>
    )
}