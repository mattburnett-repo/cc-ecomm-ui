
import { useSelector, useDispatch } from 'react-redux'

import { selectCurrentCart, removeItemFromCurrentCart } from '../features/carts/cartsSlice'
import { addItemToCurrentCart } from "../features/carts/currentCartActions"

import ItemQuantity from './ItemQuantity'

import { StyledOrderControls } from '../components/styles/OrderControls.styled'

export default function OrderControls( props ) {
    const { item } = props

    const dispatch = useDispatch()
    const currentCart = useSelector(selectCurrentCart)

    function isInCart() {
        let exists = currentCart.find(cartItem => cartItem.id === item.id)

        if (exists) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <StyledOrderControls>
            <div id="order-controls" role="presentation" aria-label='order-controls'>
                <label htmlFor='item-price'>Price:</label>
                <div role='presentation' aria-label='item-price'>{item.price}</div>

                {(isInCart()) ?
                    (<div role="presentation" aria-label='item-quantity'>
                        <ItemQuantity itemId={item.id}/>
                        <button id="remove-from-cart-button" aria-label="remove-from-cart-button" onClick={() => dispatch(removeItemFromCurrentCart(item.id))}>Remove Item</button>
                    </div>)
                    : (<button aria-label="add-to-cart" onClick={() => dispatch(addItemToCurrentCart(item))}>Add To Cart</button>)
                }
            </div>
        </StyledOrderControls>
    )
}
