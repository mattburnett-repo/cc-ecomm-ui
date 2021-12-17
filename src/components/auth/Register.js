export default function Register() {
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
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" aria-label="email" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" aria-label="password" />
            </div>
            <div>
                <button aria-label="register">Register</button>
            </div>
            <div>
                <a href="/login" aria-label="login">Login</a>
            </div>
        </div>
    )
}