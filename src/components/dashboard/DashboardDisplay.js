import NavBar from '../../features/nav/navBar';
import BrowseSearch from '../../features/nav/BrowseSearch';
import Orders from '../../features/orders/orders'
import Carts from '../../features/carts/carts'

import { mockCartData } from '../../utils/mockData';

export default function DashboardDisplay () {
    const cartData = mockCartData;

    return (
        <div>
            <NavBar calledFrom="dashboard" />
            <BrowseSearch />
            <Orders />

            {/* TODO: replace with Cart feature */}
            {/* <div role="presentation" aria-label="carts"> 
                <h2>Carts</h2>
                {cartData.map((item, index) => (
                   <div role="presentation" aria-label='cart' key={index}>cart_id: {item.cart.cart_id} user_id: {item.cart.user_id}</div>
                ))}  
            </div> */}
            <Carts />
        </div>
    )
}