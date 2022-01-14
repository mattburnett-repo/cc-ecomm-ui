
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import ItemQuantity from '../../widgets/ItemQuantity'

import { removeItemFromCurrentCart } from "../../features/carts/cartsSlice"

import { formatAsCurrency } from '../../utils/functions'
import { StyledCartItemDisplay } from '../styles/CartItemDisplay.styled'

export default function CartItemDisplay(props) {
    const { item } = props
    const [cartItemTotal, setCartItemTotal] = useState(0.00)

    const dispatch = useDispatch()

    useEffect(() => {
        setCartItemTotal(formatAsCurrency.format(item.quantity * item.price))
    // eslint-disable-next-line
    }, [item.quantity])

    return (
        <>
            <StyledCartItemDisplay>
                <div role="presentation" aria-label='cart-item-image'> 
                    <img id="cart-item-image" src={item.image_url} alt={item.name} />
                </div>                    
                <div id="cart-item-info" role="presentation" aria-label="cart-item-info">
                    <label id="cart-item-name-header" htmlFor='cart-item-name'>Name:</label> 
                    <div id="cart-item-name" role="presentation" aria-label="cart-item-name">
                        {item.name}
                    </div>
                </div>
                <div id="cart-item-order-controls" role="presentation" aria-label='cart-item-order-controls'>
                    <div id="cart-item-price" role="presentation" aria-label="cart-item-price">Price: {item.price}</div>

                    <div id="cart-item-quantity" role="presentation" aria-label='cart-item-quantity'>
                        <ItemQuantity itemId={item.id}/>
                    </div>       
                    <div id="cart-item-total" role="presentation" aria-label="cart-item-total">
                        Item total: {cartItemTotal} 
                    </div>
                    <button aria-label="remove-from-cart-button" onClick={() => dispatch(removeItemFromCurrentCart(item.id))} >Remove Item</button>
                    
                </div>
            </StyledCartItemDisplay>
        </>
    )
}