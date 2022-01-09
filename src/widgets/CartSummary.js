
import { useSelector } from 'react-redux'

import { selectCurrentCart, selectCurrentCartTotalPrice } from '../features/carts/cartsSlice';

export default function CartSummary() {
    const currentCart = useSelector(selectCurrentCart)
    const currentCartTotalPrice = useSelector(selectCurrentCartTotalPrice)

    return (
        <div role='presentation' aria-label='cart-summary-info'>
            Cart / Order has {currentCart.length} items, total price: { currentCartTotalPrice }
        </div>
    )
}