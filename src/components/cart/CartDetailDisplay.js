export default function CartDetailDisplay (props) {
    const { data } = props
    const { handleCheckout } = props.handlers

    const cartData = data.cart // TODO: this weird data 'mount point' problem worries me...

    return (
        <div role="presentation" aria-label="cart-detail-display">
             <h4>Cart Detail Display</h4>
             <h3>cart_id: {data.cart_id} user_id: {data.user_id}</h3>

             <div role="presentation" aria-label="cart-items">
                {cartData.cart_items.map((item, index) => (
                    <div role="presentation" aria-label="cart-item" key={index}>
                        <div role="presentation" aria-label="cart-item-quantity">
                            Quantity: {item.quantity}
                        </div>
                        <div role="presentation" aria-label="cart-item-name">
                            Description: {item.name}
                        </div>
                        <div role="presentation" aria-label="cart-item-price">
                            Price: {item.price}
                        </div>
                        <div role="presentation" aria-label="cart-item-total">
                            Item total: {item.line_item_total_price}
                        </div>
                    </div>
                ))} 
             </div>
             <div role="presentation" aria-label="cart-total-price">
                 Cart total: {cartData.cart_total_price.sum}
             </div>

             <button aria-label="cart-checkout-button" onClick={handleCheckout}>Checkout</button>
 
        </div>
    )
}