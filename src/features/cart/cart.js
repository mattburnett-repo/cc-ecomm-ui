import CartDisplay from "../../components/cart/CartDisplay";

import { mockCartData } from '../../utils/mockData'

export default function Cart () {
    // FIXME: this should come from an API call / Redux reducer
  

    return <CartDisplay cartData={ mockCartData } />
}