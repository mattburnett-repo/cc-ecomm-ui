

import { formatAsCurrency } from '../../utils/functions';
import { StyledOrdersDisplay } from '../styles/OrdersDisplay.styled'

export default function OrdersDisplay ( props ) {
    const { ordersData } = props;
    const { handleOrderClick } = props.handlers
    
    // TODO: order detail is not in the spec / wireframes, but it makes sense to have it as a feature
    
    return (
        <StyledOrdersDisplay>
            <div role="presentation" aria-label="orders">
                <h2>Order History</h2>
                {(ordersData.length > 0 ) ? (
                    ordersData.map((item, index) => (
                        <div role="presentation" aria-label="order-item" key={index}>
                            {/* <form onSubmit={handleOrderClick} method="post"> */}
                                {/* <input type="hidden" name="order_id" value={item.order.order_id} /> */}
                                Order ID: {item.order.order_id} &nbsp;&nbsp;
                                Total Price: {formatAsCurrency.format(item.order.total_price.sum)}&nbsp;&nbsp;
                                {/* user_id: {item.order.user_id}  */}
                                OrderDate: {item.order.order_date} 
                                {/* <input type="submit" aria-label="go-to-order" />  */}
                            {/* </form> */}
                        </div>
                    )
                )) : (<h5>No orders to show</h5>)}     
            </div>
        </StyledOrdersDisplay>
    )
}