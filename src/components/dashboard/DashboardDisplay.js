import NavBar from '../nav/NavBar';
import BrowseSearch from '../../features/nav/BrowseSearch';

import Orders from '../../features/orders/orders'

export default function DashboardDisplay (props) {
    const { orderData, cartData } = props; // TODO: these should come fro state/redux

    return (
        <div>
            <NavBar calledFrom="dashboard" />
            <BrowseSearch />

            {/* <div role="presentation" aria-label="orders">
                {orderData.map((item, index) => (
                    <div role="presentation" aria-label="order" key={index}>order_id: {item.order.order_id} user_id: {item.order.user_id} order_date: {item.order.order_date} total_price: {item.order.total_price.sum}</div>
                ))}     
            </div> */}
            <div role="presentation" aria-label="orders">
                orders feature / display goes here 
            </div> 
            <div role="presentation" aria-label="carts">
                {cartData.map((item, index) => (
                   <div role="presentation" aria-label='cart' key={index}>cart_id: {item.cart.cart_id} user_id: {item.cart.user_id}</div>
                ))}  
            </div>
        </div>
    )
}