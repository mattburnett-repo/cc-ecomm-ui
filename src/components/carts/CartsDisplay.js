// TODO: cart should have its own state, to manage changes in line-item status like quanity / deletion

export default function CartsDisplay ( props )  { // TODO: cartData should come from state / redux
    // eslint-disable-next-line 
    const { currentCart, savedCarts } = props.cartsData;
    const { handleGoToCartClick } = props.handlers // TODO: replace handleGoTo... with a router redirect 

    return (
        <div role="presentation" aria-label="carts">
            <h2>CartsDisplay</h2>
            <h4>Saved Carts</h4>
            {(savedCarts.length > 0) ? (
                savedCarts.map((item, index) => (
                    <div role="presentation" aria-label="cart-item" key={index}>
                        {/*  TODO: replace handleGoTo... with a router redirect */}
                        <form onSubmit={handleGoToCartClick} method="post"> 
                            <input type="hidden" name="cart_id" value={item.cart.cart_id} />
                            cart_id: {item.cart.cart_id}  
                            user_id: {item.cart.user_id}
                            <input type="submit" aria-label="go-to-cart" />
                        </form>
                    </div>
                )
            )) : (<h5>No saved carts to show</h5>)}
         </div>
    )    
}
