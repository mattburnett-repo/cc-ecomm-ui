import { useSelector } from "react-redux";
import { selectCarts } from './cartsSlice'

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import CartsDisplay from "../../components/carts/CartsDisplay";

export default function Carts () {
    CheckLoginStatus()
    
    const cartsData = useSelector(selectCarts)

    return <CartsDisplay cartsData={ cartsData } />
}