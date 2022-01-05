
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'


import ItemQuantity from '../../widgets/ItemQuantity'

import { removeItemFromCurrentCart } from "../../features/carts/cartsSlice"

// TODO: this should only look at current cart
//      if user wants to look at a saved cart, it should be moved to current cart before
//          coming here

export default function CartDetailDisplay (props) {
    const { data } = props
    const { handleSaveCart } = props.handlers

    const history = useHistory()
    const dispatch = useDispatch()

    const itemCount = data.length

    return (
        <div role="presentation" aria-label="cart-detail-display">
            <h4>Cart Detail Display: {itemCount} item/s</h4>

            <button aria-label="cart-detail-go-back-button" onClick={() => history.goBack() } >Go Back</button>
            <button aria-label="cart-checkout-button" onClick={() => history.push('/shipping-info')}>Checkout</button>

            <div role="presentation" aria-label="cart-items">
                {data.map((item, index) => (
                    <div role="presentation" aria-label="cart-item" key={index}>
                        <img aria-label="cart-item-image" src={item.image_url} alt={item.name}/>

                        <div role="presentation" aria-label='cart-item-quantity'>
                            <ItemQuantity itemId={item.id}/>
                        </div>

                        <div role="presentation" aria-label="cart-item-name">
                            Description: {item.name}
                        </div>
                        <div role="presentation" aria-label="cart-item-price">
                            Price: {item.price}
                        </div>
                        <div role="presentation" aria-label="cart-item-total">
                            Item total: {item.line_item_total_price}
                        </div>

                        <button aria-label="remove-from-cart-button" onClick={() => dispatch(removeItemFromCurrentCart(item.id))} >Remove From Cart</button>
                    </div>
                ))} 
            </div>
            <div role="presentation" aria-label="cart-total-price">
                Cart total: FIXME (try something with useState())
                {/* Cart total: {data.cart_total_price.sum} */}
             </div>

            <button aria-label="cart-detail-go-back-button" onClick={() => history.goBack() } >Go Back</button>
            {/* FIXME: implement save cart */}
            <button aria-label="cart-save-button" onClick={handleSaveCart}>Save Cart</button> 
            <button aria-label="cart-checkout-button" onClick={() => history.push('/shipping-info')}>Checkout</button>
            {/* TODO: try this -> <Button component={Link} to="/" variant="outlined" type="button">Back to home</Button> */}
        </div>
    )
}

