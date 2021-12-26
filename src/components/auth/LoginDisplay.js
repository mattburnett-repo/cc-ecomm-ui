export default function LoginDisplay ( props ) {
    const { handleClick, handleLogin } = props.handlers;

    // TODO: enable message / flash message when there are login errors
    return (
        <div role="presentation" aria-label="login-display">
            <div role="presentation" aria-label="oauth">
                {/* FIXME: resolve href / onClick */}
                <div><a href="/auth/google" aria-label="google-auth" onClick={handleClick}>Log in with Google</a></div>
                <div><a href="/auth/github" aria-label="github-auth" onClick={handleClick}>Log in with GitHub</a></div>   
            </div>
            <div role="presentation" aria-label="login-display-form">
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