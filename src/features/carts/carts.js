import { useSelector } from "react-redux";
import { selectCarts } from './cartsSlice'

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

    const cartsData = useSelector(selectCarts)

    return <CartsDisplay cartsData={ cartsData } handlers={handlers()}/>
}