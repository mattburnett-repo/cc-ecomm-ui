import NavBar from '../nav/NavBar';
import BrowseSearch from '../../features/nav/BrowseSearch';

export default function DashboardDisplay (props) {
    const { orderData, cartData } = props;

    return (
        <div>
            <NavBar calledFrom="dashboard" />
            <BrowseSearch />

            {/* FIXME: show actual data from mocks... */}
            <div role="presentation" aria-label="orders">
                {orderData.map((item, index) => (
                    <div role="presentation" aria-label="order" key={index}>order_id: {item.order.order_id} user_id: {item.order.user_id} order_date: {item.order.order_date} total_price: {item.order.total_price.sum}</div>
                ))}     
            </div>
            <div role="presentation" aria-label="carts">
                {cartData.map((item, index) => (
                    // <div role="presentation" aria-label="order">order_id: {item.order_id} user_id: {item.user_id} order_date: {item.order_date} total_price: {item.total_price.sum}</div>
                    <div role="presentation" aria-label='cart' key={index}>cart</div>
                ))}  
            </div>
        </div>
    )
}