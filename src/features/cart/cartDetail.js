import { useSelector } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import CartDetailDisplay from '../../components/cart/CartDetailDisplay'

import { selectCurrentCart } from '../carts/cartsSlice'

import { handleRemoveFromCart, handleCheckout } from "../../utils/handlers";

// TODO: this should only look at current cart
//      if user wants to look at a saved cart, saved cart should be moved to current cart before
//          coming here

export default function CartDetail () {
    CheckLoginStatus()
    
    function handlers() {
        return {
            handleRemoveFromCart: handleRemoveFromCart,
            handleCheckout: handleCheckout
        }
    }

    const cart = useSelector(selectCurrentCart)

    // // eslint-disable-next-line
    // const cartById = carts.filter(item => item.id == cartId) 

    return <CartDetailDisplay data={cart} handlers={handlers()}/>
}
