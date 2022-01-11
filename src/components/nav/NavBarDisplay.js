
import { Link } from 'react-router-dom'

import { StyledNavBar } from '../styles/NavBar.style'

export default function NavBarDisplay (props) {
    const { handleHomeClick, handleShowCartClick,handleCheckoutClick, handleCancelClick, handleLogoutClick } = props.handlers
    const { calledFrom, headerMessage, currentCartCount } = props

    return (
        <StyledNavBar>
            <div role="presentation" aria-label='nav-bar-placeholder' />
            <div role="presentation" aria-label="nav-bar-message">
                <div role="presentation" aria-label="header-message">{headerMessage}</div>
                <div role="presentation" aria-label="header-current-cart-item-count">
                    {(currentCartCount === 0) ?
                        (<div>You have {currentCartCount} items in your current cart</div>)
                        : ( <Link to ="/cart-detail"  aria-label="go-to-current-cart-link">You have {currentCartCount} item/s in your current cart</Link>)
                    }
                
                </div>
            </div>
            <div role="presentation" aria-label="nav-bar-buttons">
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
            </div>
        </StyledNavBar>
    )
}
