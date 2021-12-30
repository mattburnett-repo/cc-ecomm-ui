export default function NavBarDisplay (props) {
    const { handleHomeClick, handleShowCartClick,handleCheckoutClick, handleCancelClick, handleLogoutClick } = props.handlers
    // const { currentCart } = props

    return (
        <div role="presentation" aria-label="nav-bar">
            <div role="presentation" aria-label="header-message">{props.calledFrom} {props.headerMessage}</div>
            {(props.calledFrom !== 'dashboard') ? (
                <>
                    <button aria-label="home" onClick={handleHomeClick}>Home</button>
                    <button aria-label="show-cart" onClick={handleShowCartClick}>Show Cart</button>
                </>
            ) : (<></>)}
            {(props.calledFrom === 'cart') ? (
                <button aria-label="checkout" onClick={handleCheckoutClick}>Checkout</button>
            ) : (<></>)}
            {(props.calledFrom === 'shippingInfo' || props.calledFrom === 'paymentInfo') ? (
                <button aria-label="cancel" onClick={handleCancelClick}>Cancel</button>
            ) : (<></>)}

            <button aria-label="logout" onClick={handleLogoutClick}>Log Out</button>

            {/* FIXME: need a better way to keep track of cart_items count. this is an inadequate stub */}
            {/* TODO: make cart display clickable, redirect to cart detail display */}
            {/* <div role="presentation" aria-label="current-cart-display"> 
                Current Cart: {currentCart}
            </div> */}
        </div>
    )
}
