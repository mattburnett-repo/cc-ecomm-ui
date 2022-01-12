
import { useHistory } from 'react-router-dom'

export default function GoToCheckoutButton() {
    const history = useHistory()

    return (
        <button aria-label="show-cart" onClick={() => history.push('/shipping-info')}>Checkout</button>
    )
}
