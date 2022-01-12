
import { useHistory } from 'react-router-dom'

export default function ShowCartButton() {
    const history = useHistory()

    return (
        <button aria-label="show-cart" onClick={() => history.push('/cart-detail')}>Show Cart</button>
    )
}