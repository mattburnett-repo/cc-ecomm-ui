

import { formatAsCurrency } from '../../utils/functions';
import { StyledOrdersDisplay } from '../styles/OrdersDisplay.styled'

export default function OrdersDisplay ( props ) {
    const { ordersData } = props;
    
    return (
        <StyledOrdersDisplay>
            <div role="presentation" aria-label="orders">
                <h2>Order History</h2>
                {(ordersData.length > 0 ) ? (
                    ordersData.map((item, index) => (
                        <div role="presentation" aria-label="order-item" key={index}>
                            Order ID: {item.order.order_id} &nbsp;&nbsp;
                            Total Price: {formatAsCurrency.format(item.order.total_price.sum)}&nbsp;&nbsp;
                            OrderDate: {item.order.order_date} 
                        </div>
                    )
                )) : (<h5>No orders to show</h5>)}     
            </div>
        </StyledOrdersDisplay>
    )
}