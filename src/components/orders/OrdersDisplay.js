
import { formatAsCurrency } from '../../utils/functions';
import { StyledOrdersDisplay } from '../styles/OrdersDisplay.styled'

export default function OrdersDisplay ( props ) {
    const { ordersData } = props;
    
    return (
        <StyledOrdersDisplay>
            <h2>Order History</h2>
            <div className="orders" role="presentation" aria-label="orders">
                <label>ID:</label>
                <label>Price:</label>
                <label>Date:</label> 
                {(ordersData.length > 0 ) ? (
                    ordersData.map((item, index) => (
                        <div key={index} role="presentation" aria-label="order-item">
                            <div>{item.order.order_id}</div>
                            <div>{formatAsCurrency.format(item.order.total_price.sum)}</div>
                            <div>{item.order.order_date}</div> 
                        </div>
                    )
                )) : (<h5>No orders to show</h5>)}     
            </div>
        </StyledOrdersDisplay>
    )
}

