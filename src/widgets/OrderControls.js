
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
            <div className="order-controls" role="presentation" aria-label='order-controls'>
                <div id="item-price" role='presentation' aria-label='item-price'>
                    <label htmlFor='item-price'>Price:&nbsp;</label>
                    {item.price}
                </div>
                <div> </div>
                {(isInCart()) ?
                    (<div role="presentation" aria-label='item-quantity'>
                        <ItemQuantity itemId={item.id}/>
                        <button className="remove-from-cart-button" aria-label="remove-from-cart-button" onClick={() => dispatch(removeItemFromCurrentCart(item.id))}>Remove Item</button>
                    </div>)
                    : (<div role='presentation' aria-label="add-to-cart">
                        <button className="add-to-cart-button" aria-label="add-to-cart" onClick={() => dispatch(addItemToCurrentCart(item))}>Add To Cart</button>
                       </div>
                    )
                }
            </div>
        </StyledOrderControls>
    )
}
