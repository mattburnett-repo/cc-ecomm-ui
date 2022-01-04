
import { useSelector } from 'react-redux'

import { selectCurrentCart } from '../features/carts/cartsSlice';

export default function CartSummary() {
    const currentCart = useSelector(selectCurrentCart)

    return (
        <div role='presentation' aria-label='cart-summary-info'>
            Cart / Order has {currentCart.length} items, total price: FIXME
        </div>
    )
}