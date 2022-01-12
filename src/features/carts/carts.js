import { useSelector } from "react-redux";
import { selectSavedCarts, selectCurrentCart } from './cartsSlice'

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import CartsDisplay from "../../components/carts/CartsDisplay";

export default function Carts () {
    CheckLoginStatus()
    
    const currentCart = useSelector(selectCurrentCart)
    const savedCarts = useSelector(selectSavedCarts)

    function allCartData () {
        return {
            currentCart: currentCart,
            savedCarts: savedCarts
        }
    }

    return <CartsDisplay cartsData={ allCartData() }/>
}