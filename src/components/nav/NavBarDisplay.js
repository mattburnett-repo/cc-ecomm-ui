
import { Link } from 'react-router-dom'

import ShowCartButton from '../../widgets/ShowCartButton'
import GoHomeButton from '../../widgets/GoHomeButton'
import GoToCheckoutButton from '../../widgets/GoToCheckoutButton'
import LogoutButton from '../../widgets/LogoutButton'

import { StyledNavBar } from '../styles/NavBar.style'

export default function NavBarDisplay (props) {
    // const { handleLogoutClick } = props.handlers
    const { calledFrom, headerMessage, currentCartCount } = props

    return (
        <StyledNavBar>
            <div role="presentation" aria-label='nav-bar-placeholder' />
            <div role="presentation" aria-label="nav-bar-message">
                <div role="presentation" id="header-message" aria-label="header-message">{headerMessage}</div>
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
                {(calledFrom === 'productDetail') ? (
                    <>
                        <ShowCartButton />
                        <GoHomeButton />
                        {/* <button aria-label="logout" onClick={handleLogoutClick}>Log Out</button> */}
                        <LogoutButton />
                    </>
                ) : (<></>)}
                {(calledFrom === 'cart') ? (
                    <>
                        <GoToCheckoutButton />
                        <GoHomeButton />
                        {/* <button aria-label="logout" onClick={handleLogoutClick}>Log Out</button> */}
                        <LogoutButton />
                    </>
                ) : (<></>)}
                {(calledFrom === 'shippingInfo' || calledFrom === 'paymentInfo' || calledFrom === "dashboard") ? (
                    <>
                        <GoHomeButton />  
                        {/* <button aria-label="logout" onClick={handleLogoutClick}>Log Out</button>  */}
                        <LogoutButton />
                    </>
                ) : (<></>)}
            </div>
        </StyledNavBar>
    )
}
