export default function LoginDisplay ( props ) {
    const { handleClick } = props;

    return (
        <form onSubmit={handleClick} method="post">
            <div role="presentation" aria-label="login-display-form">
                <div><a href="/auth/google" aria-label="google-auth" onClick={handleClick}>Log in with Google</a></div>
                <div><a href="/auth/github" aria-label="github-auth" onClick={handleClick}>Log in with GitHub</a></div>
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
                <div>
                <label htmlFor="register">Don't have an account yet? </label>
                    <a href="/register" id="register" aria-label="register">Register</a>
                </div>
            </div>            
        </form>
    )
}