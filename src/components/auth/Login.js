export default function Login () {
    return (
        <div>
            <div>
                <button aria-label="google-auth">Log in with Google</button>
                <button aria-label="github-auth">Log in with Google</button>
            </div>
            <div>
                <label htmlFor="username">Username:</label>
                <input id="username" aria-label="username" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" aria-label="password" />
            </div>
            <div>
                <button aria-label="login">Log in</button>
            </div>
            <div>
            <label htmlFor="register">Don't have an account yet? </label>
                <a href="/register" id="register" aria-label="register">Register</a>
            </div>
        </div>
    )
}