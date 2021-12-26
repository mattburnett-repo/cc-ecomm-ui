
import RegisterDisplay from '../../components/auth/RegisterDisplay'

function handleClick() {
    // redirect to appropriate auth component, zB
    // <p class="lead mt-4">
    //     No Account? <a href="/register">Register</a>
    // </p>
    alert('handle click')
}
function handleRegister(e) {
    e.preventDefault();

    let username = e.target.username.value
    let email = e.target.email.value
    let password = e.target.password.value

    alert('implement handleRegister')

    // dispatch(localAuthLogin({username, password}));
}
function handleLogin(e) {
    e.preventDefault();

    let username = e.target.username.value
    let email = e.target.email.value
    let password = e.target.password.value

    alert('implement handleLogin')

    // dispatch(localAuthLogin({username, password}));
}

function handlers() {
    return {
        handleClick: handleClick,
        handleRegister: handleRegister,
        handleLogin: handleLogin
    }
}

export default function Register() {

    return <RegisterDisplay handlers={handlers()}/>
}