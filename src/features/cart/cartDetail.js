import { useSelector } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import CartDetailDisplay from '../../components/cart/CartDetailDisplay'

import { selectCurrentCart } from '../carts/cartsSlice'

import { handleCheckout } from "../../utils/handlers";

// TODO: this should only look at current cart
//      if user wants to look at a saved cart, it should be moved to current cart before
//          coming here

export default function CartDetail () {
// export default function CartDetail ( props ) {
//     let { cartId } = props

    CheckLoginStatus()
    
    function handlers() {
        return {
            handleCheckout: handleCheckout
        }
    }

    const cart = useSelector(selectCurrentCart)
    console.log('cartdetail.js cart ', cart)
    // // eslint-disable-next-line
    // const cartById = carts.filter(item => item.id == cartId) 

    return <CartDetailDisplay data={cart} handlers={handlers()}/>
}
