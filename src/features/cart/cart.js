import CheckLoginStatus from "../../utils/checkLoginStatus";
import CartDisplay from "../../components/cart/CartDisplay";

import { mockCartData } from '../../utils/mockData' // FIXME: this should come from an API call / Redux reducer

export default function Cart () {
    CheckLoginStatus()
    
    return <CartDisplay cartData={ mockCartData } />
}