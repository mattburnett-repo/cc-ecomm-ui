// TODO: cart should have its own state, to manage changes in line-item status like quanity / deletion

export default function CartsDisplay ( props )  { // TODO: cartData should come from state / redux
    const { cartsData } = props;
    const { handleCartClick } = props.handlers

    return (
        <div role="presentation" aria-label="carts">
            <h2>CartsDisplay</h2>
            {cartsData.map((item, index) => (
                <div role="presentation" aria-label="cart-item" key={index}>
                    <form onSubmit={handleCartClick} method="post">
                        <input type="hidden" name="cart_id" value={item.cart.cart_id} />
                        cart_id: {item.cart.cart_id}  
                        user_id: {item.cart.user_id}
                        <input type="submit" aria-label="go-to-cart" />
                    </form>
                </div>
            ))}
         </div>
    )    
}