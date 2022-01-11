
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"

import { setCurrentCartTotalPrice } from '../../features/carts/currentCartActions'
import { selectCurrentCart } from '../../features/carts/cartsSlice'

import CartItemDisplay from "./CartItemDisplay"
import { StyledCartDetailDisplay } from '../styles/CartDetailDisplay.styled'

// TODO: this should only look at current cart
//      if user wants to look at a saved cart, it should be moved to current cart before
//          coming here

export default function CartDetailDisplay (props) {
    const { data } = props
    // const { handleSaveCart } = props.handlers

    const currentCart = useSelector(selectCurrentCart)
    const dispatch = useDispatch()

    const [cartTotalPrice, setCartTotalPrice] = useState(0.00)

    const history = useHistory()

    const itemCount = data.length

    useEffect(() => {
        let cart_total = 0.00
        currentCart.forEach(item => {cart_total += item.item_total_price})

        setCartTotalPrice(cart_total)                   // UI state
        dispatch(setCurrentCartTotalPrice(cart_total))  // redux state
    // eslint-disable-next-line
    }, [currentCart])

    return (
        <>
            <header>
                <h4>Cart Detail Display: {itemCount} item/s</h4>
                <button aria-label="cart-detail-go-back-button" onClick={() => history.goBack() } >Go Back</button>
                <button aria-label="cart-checkout-button" onClick={() => history.push('/shipping-info')}>Checkout</button>                  
            </header>
            <StyledCartDetailDisplay>
                <div role="presentation" aria-label="cart-items">
                    {data.map((item, index) => (
                        <CartItemDisplay item={item} />
                    ))} 
                </div>
            </StyledCartDetailDisplay>
            <footer>
                <div role="presentation" aria-label="cart-total-price">
                    Cart total: {cartTotalPrice}
                </div>
                <button aria-label="cart-detail-go-back-button" onClick={() => history.goBack() } >Go Back</button>
                <button aria-label="cart-checkout-button" onClick={() => history.push('/shipping-info')}>Checkout</button>
                {/* TODO: try this -> <Button component={Link} to="/" variant="outlined" type="button">Back to home</Button> */}
            </footer>
        </>
    )
}

