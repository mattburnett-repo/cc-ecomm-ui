
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"

import { setCurrentCartTotalPrice } from '../../features/carts/currentCartActions'
import { selectCurrentCart } from '../../features/carts/cartsSlice'

import GoToCheckoutButton from '../../widgets/GoToCheckoutButton'
import { formatAsCurrency } from '../../utils/functions'
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

    useEffect(() => {
        let the_prices = []
        currentCart.forEach(item => the_prices.push(parseFloat(item.item_total_price)))
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        let cart_total = the_prices.reduce(reducer, 0.00)

        setCartTotalPrice(formatAsCurrency.format(cart_total))                   // UI state
        dispatch(setCurrentCartTotalPrice(formatAsCurrency.format(cart_total)))  // redux state
    // eslint-disable-next-line
    }, [currentCart])

    return (
        <>
            {/* <StyledCartDetailDisplay>
                <header>
                    <h4>Cart Detail Display: {data.length} item/s</h4>
                    <button aria-label="cart-detail-go-back-button" onClick={() => history.goBack() } >Go Back</button>
                    <button aria-label="cart-checkout-button" onClick={() => history.push('/shipping-info')}>Checkout</button>                  
                </header>    
            </ StyledCartDetailDisplay> */}
            <div role="presentation" aria-label="cart-items">
                {data.map((item, index) => (
                    <CartItemDisplay item={item} />
                ))} 
            </div>
            <StyledCartDetailDisplay>
                <footer>
                    <div role="presentation" aria-label="cart-total-price">
                        Cart total: {cartTotalPrice}
                    </div>
                    <GoToCheckoutButton />
                </footer>
            </StyledCartDetailDisplay>
        </>
    )
}

