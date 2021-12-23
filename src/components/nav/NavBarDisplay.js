export default function NavBarDisplay (props) {
    return (
        <div role="presentation" aria-label="nav-bar">
            {/* TODO: make header-message dynamic depending on caller */}
            <div role="presentation" aria-label="header-message">{props.calledFrom} {props.headerMessage}</div>
  
            {(props.calledFrom !== 'dashboard') ? (
                <>
                    <button aria-label="home" onClick={props.handleHomeClick}>Home</button>
                    <button aria-label="show-cart" onClick={props.handleShowCartClick}>Show Cart</button>
                </>
            ) : (<></>)}
            {(props.calledFrom === 'cart') ? (
                <button aria-label="checkout" onClick={props.handleCheckoutClick}>Checkout</button>
            ) : (<></>)}
            {(props.calledFrom === 'shippingInfo' || props.calledFrom === 'paymentInfo') ? (
                <button aria-label="cancel" onClick={props.handleCancelClick}>Cancel</button>
            ) : (<></>)}

            <button aria-label="logout" onClick={props.handleLogoutClick}>Log Out</button>
        </div>
    )
}
