
import { StyledCartsDisplay } from "../styles/CartsDisplay.styled";

export default function CartsDisplay ( props )  { 
    // eslint-disable-next-line 
    const { currentCart, savedCarts } = props.cartsData

    return (
        <StyledCartsDisplay>
            <div role="presentation" aria-label="carts">
                <h2>Cart History</h2>
                {(savedCarts.length > 0) ? (
                    savedCarts.map((item, index) => (
                        <div role="presentation" aria-label="cart-item" key={index}>
                            Cart ID: {item.cart.cart_id} &nbsp;&nbsp;
                            Cart Date: TBD
                        </div>
                    )
                )) : (<h5>No saved carts to show</h5>)}
            </div>
         </StyledCartsDisplay>
    )    
}
