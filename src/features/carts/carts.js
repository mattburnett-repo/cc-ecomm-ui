import { useSelector } from "react-redux";
import { selectCarts } from './cartsSlice'

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import CartsDisplay from "../../components/carts/CartsDisplay";

// import { mockCartData } from '../../utils/mockData' // FIXME: this should come from an API call / Redux reducer

export default function Carts () {
    CheckLoginStatus()
    
    const cartsData = useSelector(selectCarts)
    // const cartData = mockCartData

    return <CartsDisplay cartsData={ cartsData } />
}