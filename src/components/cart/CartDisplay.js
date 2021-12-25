// TODO: cart should have its own state, to manage changes in line-item status like quanity / deletion

import NavBarDisplay from '../../components/nav/NavBarDisplay';

export default function CartDisplay ( props )  { // TODO: cartData should come from state / redux
    const { cartData } = props;
    const theCart = cartData[0].cart;

    return (
        <div>
            <NavBarDisplay calledFrom="cart" />
            <div role="presentation" aria-label="cart-header">
                cart_id: {theCart.cart_id} user_id: {theCart.user_id}
            </div>
            <div role="presentation" aria-label="cart-items">
                {theCart.cart_items.map((item, index) => (
                    <div role="presentation" aria-label="cart-item" key={index}>
                        <label htmlFor='product-id'>Product ID:</label>
                        <div id='product-id' aria-label="product-id">{item.product_id} </ div> 
                        <label htmlFor='product-name'>Product Name:</label>
                        <div id='product-name' aria-label="product-name">{item.product_name}</ div> 
                        <label htmlFor='product-price'>Product Price:</label>
                        <div id='product-price' aria-label="product-price">{item.product_price}</ div> 
                        <label htmlFor='product-quantity'>Product Quantity:</label>
                        <input id="product-quantity" role="textbox" aria-label='product-quantity' placeholder={item.product_quantity} />
                        <label htmlFor='product-total-price'>Product Total Price:</label>
                        <div id='product-total-price' aria-label="product-total-price">{item.product_total_price}</ div> 
                    </div>
                ))}     
            </div>
            <div role="presentation" aria-label="cart-total">
                <label htmlFor="cart-total-price">Cart Total:</label>
                <div id="cart-total-price" role="presentation" aria-label="cart-total-price">{theCart.cart_total_price.sum} </div>
            </div>
            <button aria-label="checkout-button">Checkout</button>
        </div>
    )    
}