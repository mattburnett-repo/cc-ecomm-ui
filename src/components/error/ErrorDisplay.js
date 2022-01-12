
import { useHistory } from 'react-router-dom'

import { StyledErrorDisplay } from '../styles/ErrorDisplay.styled'

export default function ErrorDisplay() {

    const history = useHistory()
    return (
        <StyledErrorDisplay>
            <h3>There was an error. Sorry about that; we're working on it.</h3>
            <button onClick={() => history.push('/')}>Home</button>
        </StyledErrorDisplay>
    )
}
