
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import ItemQuantity from '../../widgets/ItemQuantity'

import { removeItemFromCurrentCart } from "../../features/carts/cartsSlice"

export default function CartItemDisplay(props) {
    const { item } = props
    const [cartItemTotal, setCartItemTotal] = useState(0.00)

    const dispatch = useDispatch()

    useEffect(() => {
        setCartItemTotal(item.quantity * item.price)
    // eslint-disable-next-line
    }, [item.quantity])

    return (
        // <div role="presentation" aria-label="cart-item" key={index}>
        <div role="presentation" aria-label="cart-item" key={item.id}>
            <div>image goes here</div>

            <div role="presentation" aria-label='cart-item-quantity'>
                <ItemQuantity itemId={item.id}/>
            </div>

            <div role="presentation" aria-label="cart-item-name">
                Name: {item.name}
            </div>
            <div role="presentation" aria-label="cart-item-description">
                Description: {item.description}
            </div>
            <div role="presentation" aria-label="cart-item-price">
                Price: {item.price}
            </div>
            <div role="presentation" aria-label="cart-item-total">
                Item total: {cartItemTotal} 
            </div>

            <button aria-label="remove-from-cart-button" onClick={() => dispatch(removeItemFromCurrentCart(item.id))} >Remove From Cart</button>
        </div>
    )
}