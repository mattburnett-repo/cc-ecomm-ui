
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
                            <form onSubmit={handleOrderClick} method="post">
                                <input type="hidden" name="order_id" value={item.order.order_id} />
                                order_id: {item.order.order_id} 
                                user_id: {item.order.user_id} 
                                order_date: {item.order.order_date} 
                                total_price: {item.order.total_price.sum}
                                <input type="submit" aria-label="go-to-order" /> 
                            </form>
                        </div>
                    )
                )) : (<h5>No orders to show</h5>)}     
            </div>
        </StyledOrdersDisplay>
    )
}