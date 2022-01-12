
import { useHistory } from 'react-router-dom'

export default function ErrorDisplay() {

    const history = useHistory()
    return (
        <div>
            <h3>There was an error. Sorry about that; we're working on it.</h3>
            <button onClick={() => history.push('/')}>Home</button>
        </div>
    )
}
