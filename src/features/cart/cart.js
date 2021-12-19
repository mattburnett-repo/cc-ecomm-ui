import CartDisplay from "../../components/cart/CartDisplay";

import { mockCartData } from '../../utils/mockData' // FIXME: this should come from an API call / Redux reducer

export default function Cart () {
    
    return <CartDisplay cartData={ mockCartData } />
}