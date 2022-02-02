
import { useHistory } from 'react-router-dom'

export default function GoToCheckoutButton() {
    const history = useHistory()

    return (
        <button aria-label="go-to-checkout" onClick={() => history.push('/shipping-info')}>Checkout</button>
    )
}
