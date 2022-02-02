
import { useHistory } from 'react-router-dom'

export default function GoHomeButton() {
    const history = useHistory()

    return (
        <button aria-label="go-home-button" onClick={() => history.push('/dashboard')}>Home</button>
    )
}