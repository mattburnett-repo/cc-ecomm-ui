export default function OrderConfirmationDisplay ( props ) {
    const { data } = props;
    
    return (
        <div>
            <div role="presentation" aria-label="confirmation-info">
                <div role="presentation" aria-label="order-amount-date">
                    Your order for {data.total_amount} has been placed on {data.order_date}
                </div>
                <div role="presentation" aria-label="order-payment">
                    Payment in the amount of {data.total_amount} was made using {data.payment_type}
                </div>
                <div role="presentation" aria-label="order-number">
                    The order number is {data.order_id}
                </div>
                <div role="presentation" aria-label="order-delivery">
                    Order will be delivered to {data.delivery_address}
                </div>
            </div>
            <button aria-label="home">Home</button>
            <button aria-label="logout">Log Out</button>
        </div>
    )
}