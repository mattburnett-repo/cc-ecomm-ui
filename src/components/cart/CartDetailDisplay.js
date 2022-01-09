
// import { useState, useEffect } from 'react'

import { useHistory } from "react-router-dom"

import CartItemDisplay from "./CartItemDispay"

// TODO: this should only look at current cart
//      if user wants to look at a saved cart, it should be moved to current cart before
//          coming here

export default function CartDetailDisplay (props) {
    // const [ cartTotalPrice, setCartTotalPrice ] = useState(0) get this from context

    const { data } = props
    const { handleSaveCart } = props.handlers

    const history = useHistory()

    const itemCount = data.length

    return (
        <div role="presentation" aria-label="cart-detail-display">
            <h4>Cart Detail Display: {itemCount} item/s</h4>

            <button aria-label="cart-detail-go-back-button" onClick={() => history.goBack() } >Go Back</button>
            <button aria-label="cart-checkout-button" onClick={() => history.push('/shipping-info')}>Checkout</button>

            <div role="presentation" aria-label="cart-items">
                {data.map((item, index) => (
                    <>
                        <br /><br />
                        <CartItemDisplay item={item} />
                    </>
                ))} 
            </div>
            <br /><br />
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

