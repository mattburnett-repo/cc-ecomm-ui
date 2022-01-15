

import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { selectCurrentCart, selectCurrentCartTotalPrice } from '../features/carts/cartsSlice';

export default function CartSummary() {
    const currentCart = useSelector(selectCurrentCart)
    const currentCartTotalPrice = useSelector(selectCurrentCartTotalPrice)

    const [ itemCount, setItemCount ] = useState(0)

    useEffect(() => {
        let item_total_count = 0;   // FIXME: this is sloppy and should be handled when quanity is changed / sent to redux
        currentCart.forEach(item => item_total_count += item.quantity)
        setItemCount(item_total_count)
    }, [currentCart])

    return (
        <div role='presentation' aria-label='cart-summary-info'>
            Order has {itemCount} items, total price: { currentCartTotalPrice }
        </div>
    )
}