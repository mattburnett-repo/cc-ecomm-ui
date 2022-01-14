
import { StyledCartsDisplay } from "../styles/CartsDisplay.styled";

export default function CartsDisplay ( props )  { 
    const { savedCarts } = props.cartsData

    return (
        <StyledCartsDisplay>
            <h2>Cart History</h2>
            <div className="carts" role="presentation" aria-label="carts">
                <label>ID:</label>
                <label>Date:</label>
                {(savedCarts.length > 0) ? (
                    savedCarts.map((item, index) => (
                        <>
                            <div>{item.cart.cart_id}</div>
                            <div>TBD</div>
                        </>
                    )
                )) : (<h5>No saved carts to show</h5>)}
            </div>
         </StyledCartsDisplay>
    )    
}
