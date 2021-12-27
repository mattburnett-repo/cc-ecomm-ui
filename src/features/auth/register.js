
// import { useDispatch } from 'react-redux'

// import localAuthRegister from './authSlice'

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

    let registerPayload = {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value
    }

    console.log('registerPayload: ', registerPayload)

    // dispatch(localAuthRegister({registerPayload}));
}

function handlers() {
    return {
        handleClick: handleClick,
        handleRegister: handleRegister,
    }
}

export default function Register() {

    return <RegisterDisplay handlers={handlers()}/>
}