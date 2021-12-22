export default function OrdersDisplay ( props ) {
    const { ordersData } = props;

    return (
        <div role="presentation" aria-label="orders">
            <h1>OrdersDisplay</h1>
            {ordersData.map((item, index) => (
                <div role="presentation" aria-label="order" key={index}>order_id: {item.order.order_id} user_id: {item.order.user_id} order_date: {item.order.order_date} total_price: {item.order.total_price.sum}</div>
            ))}     
        </div>
    )
}