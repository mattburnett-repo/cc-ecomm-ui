export default function Cart ()  {
    return (
        <div>
            <div role="presentation" aria-label="cart-items">
                <div>cart item 01</div>
                <div>cart item 02</div>
                <div>cart item 03</div>
            </div>
            <div role="presentation" aria-label="cart-total-price">
                <label htmlFor="cart-total-price">Cart Total</label>
                <div id="cart-total-price">cart total goes here</div>
            </div>
            <button aria-label="checkout-button">Checkout</button>
        </div>
    )
}