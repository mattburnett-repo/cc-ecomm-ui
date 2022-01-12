
import { useHistory } from 'react-router-dom'

export default function GoHomeButton() {
    const history = useHistory()

    return (
        <button aria-label="show-cart" onClick={() => history.push('/dashboard')}>Home</button>
    )
}