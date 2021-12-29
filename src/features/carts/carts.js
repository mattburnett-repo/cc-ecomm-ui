import { useSelector } from "react-redux";
import { selectSavedCarts, selectCurrentCart } from './cartsSlice'

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import CartsDisplay from "../../components/carts/CartsDisplay";

export default function Carts () {
    CheckLoginStatus()
    
    function handleCartClick(e) {
        e.preventDefault()

        let cart_id = e.target.cart_id.value
        alert('go to cart detail component ' + cart_id)
    }
    
    function handlers() {
        return {
            handleCartClick: handleCartClick,
        }
    }

    const currentCart = useSelector(selectCurrentCart)
    const savedCarts = useSelector(selectSavedCarts)

    function allCartData () {
        return {
            currentCart: currentCart,
            savedCarts: savedCarts
        }
    }

    return <CartsDisplay cartsData={ allCartData() } handlers={handlers()}/>
}