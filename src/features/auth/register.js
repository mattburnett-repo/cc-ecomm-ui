import RegisterDisplay from '../../components/auth/RegisterDisplay'

export default function Register() {
    // use some state here?
    //      const [isRegistered, setIsRegistered] = useState(false)
    
    function handleClick() {
        // redirect to appropriate auth component, zB
        // <p class="lead mt-4">
        //     No Account? <a href="/register">Register</a>
        // </p>
        alert('handle click')
    }
    async function handleRegister(e) {
        e.preventDefault();
    
        // https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
       
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
        const apiEndpoint = '/api/v1/register/remote'
        const theUrl = API_BASE_URL + apiEndpoint

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value, })
        };

        const response = await fetch(theUrl, requestOptions);
        const resStatus = response.status
        const data = await response.json();

        console.log('response status ', resStatus)
        console.log('data ', data)
    }
    
    function handlers() {
        return {
            handleClick: handleClick,
            handleRegister: handleRegister,
        }
    }

    return <RegisterDisplay handlers={handlers()}/>
}