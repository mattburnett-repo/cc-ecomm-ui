export default function Register( props ) {
    const { handleClick, handleRegister } = props.handlers

    return (
        <div role="presentation" aria-label="register-display">
            <div role="presentation" aria-label="oauth">
                {/* FIXME: resolve href / onClick */}
                <div><a href="/auth/google" aria-label="google-auth" onClick={handleClick}>Log in with Google</a></div>
                <div><a href="/auth/github" aria-label="github-auth" onClick={handleClick}>Log in with GitHub</a></div>   
            </div>
            <div role="presentation" aria-label="register-display-form">
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
                        <button aria-label="register-button" onClick={handleRegister}>Create Account</button>
                    </div>
                </form>
            </div> 
            <div role="presentation" aria-label="login">
                <label htmlFor="login">Already have an account? </label>
                <button id="register" aria-label="login-button" onClick={handleRegister}>Login</button> 
            </div>
        </div>
    )
}