
import { useSelector } from 'react-redux'

import { selectCurrentCart } from '../features/carts/cartsSlice';

export default function CartSummary() {
    const currentCart = useSelector(selectCurrentCart)

    return (
        <h4>
            Cart / Order has {currentCart.length} items, total price: FIXME
        </h4>
    )
}