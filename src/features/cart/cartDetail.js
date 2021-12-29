import { useSelector } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import CartDetailDisplay from '../../components/cart/CartDetailDisplay'

import { selectSavedCarts } from '../carts/cartsSlice'

export default function CartDetail ( props ) {
    let { cartId } = props

    CheckLoginStatus()

    function handleCheckout() {
        alert('handleAddToCart')
    }

    function handlers() {
        return {
            handleCheckout: handleCheckout
        }
    }

    const carts = useSelector(selectSavedCarts)
    // eslint-disable-next-line
    const cartById = carts.filter(item => item.id == cartId) 

    return <CartDetailDisplay data={cartById} handlers={handlers()}/>
}
