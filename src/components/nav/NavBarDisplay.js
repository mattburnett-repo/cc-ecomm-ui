
import { Link } from 'react-router-dom'

import ShowCartButton from '../../widgets/ShowCartButton'
import GoHomeButton from '../../widgets/GoHomeButton'
import GoToCheckoutButton from '../../widgets/GoToCheckoutButton'

import { StyledNavBar } from '../styles/NavBar.style'

export default function NavBarDisplay (props) {
    const { handleHomeClick, handleShowCartClick,handleCheckoutClick, handleCancelClick, handleLogoutClick } = props.handlers
    const { calledFrom, headerMessage, currentCartCount } = props

    return (
        <StyledNavBar>
            <div role="presentation" aria-label='nav-bar-placeholder' />
            <div role="presentation" aria-label="nav-bar-message">
                <div role="presentation" aria-label="header-message">{headerMessage}</div>
                {(calledFrom === 'dashboard') ? (
                    <>
                    <div role="presentation" aria-label="header-current-cart-item-count">
                        {(currentCartCount === 0) ?
                            (<div>You have {currentCartCount} items in your current cart</div>)
                            : ( <Link to ="/cart-detail"  aria-label="go-to-current-cart-link">You have {currentCartCount} item/s in your current cart</Link>)
                        }
                    </div>
                    </>
                ) : (<></>)}
            </div>
            <div role="presentation" aria-label="nav-bar-buttons">
                {/*  TODO: ummmm.... fix.. this... :) */}
                {(calledFrom !== 'dashboard' && calledFrom !== 'cart' 
                    && calledFrom !== 'shippingInfo' && calledFrom !== 'paymentInfo'
                    && calledFrom !== 'orderConfirmation') ? (
                    <>
                        <ShowCartButton />
                        <GoHomeButton />
                        <button aria-label="logout" onClick={handleLogoutClick}>Log Out</button>
                    </>
                ) : (<></>)}
                {(calledFrom === 'cart') ? (
                    <>
                    <GoToCheckoutButton />
                    <GoHomeButton />
                    <button aria-label="logout" onClick={handleLogoutClick}>Log Out</button>
                    </>
                ) : (<></>)}
                {(calledFrom === 'shippingInfo' || calledFrom === 'paymentInfo') ? (
                    <>
                        {/* <button aria-label="cancel" onClick={handleCancelClick}>Cancel</button> */}
                        <GoHomeButton />  
                        <button aria-label="logout" onClick={handleLogoutClick}>Log Out</button>                
                    </>
                ) : (<></>)}
            </div>
        </StyledNavBar>
    )
}
