// TODO: cart should have its own state, to manage changes in line-item status like quanity / deletion

export default function CartsDisplay ( props )  { // TODO: cartData should come from state / redux
    const { cartsData } = props;

    return (
        <div role="presentation" aria-label="carts">
            <h2>CartsDisplay</h2>
            {cartsData.map((item, index) => (
                <div role="presentation" aria-label="cart" key={index}>
                    cart_id: {item.cart.cart_id}  
                    user_id: {item.cart.user_id}
                </div>
            ))}
         </div>
    )    
}