import { useSelector } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import CartDetailDisplay from '../../components/cart/CartDetailDisplay'

import { selectCarts } from '../carts/cartsSlice'

export default function CartDetail ( props ) {
    let { cartId } = props

    CheckLoginStatus()

    // function handlers() {
    //     return {

    //     }
    // }

    const carts = useSelector(selectCarts)
    // eslint-disable-next-line
    const cartById = carts.filter(item => item.id == cartId) 

    return <CartDetailDisplay data={cartById} />
}
