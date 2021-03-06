
import { Link } from 'react-router-dom'

import ShowCartButton from '../../widgets/ShowCartButton'
import GoHomeButton from '../../widgets/GoHomeButton'
import GoToCheckoutButton from '../../widgets/GoToCheckoutButton'
import LogoutButton from '../../widgets/LogoutButton'

import { StyledNavBar } from '../styles/NavBar.style'

export default function NavBarDisplay (props) {
    const { calledFrom, headerMessage, currentCartCount } = props

    return (
        <StyledNavBar>
            <div className='nav-bar-container' role="presentation" aria-label="nav-bar-container">
                <div></div>
                <div role="presentation" aria-label="nav-bar-message">
                    <div className="header-message" role="presentation" aria-label="header-message">{headerMessage}</div>
                    {(calledFrom === 'dashboard') ? (
                        <>
                            <div role="presentation" aria-label="header-current-cart-item-count">
                                {(currentCartCount === 0) ?
                                    (<div>You have no items in your current cart</div>)
                                    : ( <Link to ="/cart-detail"  aria-label="go-to-current-cart-link">
                                        You have {currentCartCount} {(currentCartCount === 1) ? "item" : "items"} in your current cart</Link>
                                    )
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
                            <LogoutButton />
                        </>
                    ) : (<></>)}
                    {(calledFrom === 'cart') ? (
                        <>
                            <GoToCheckoutButton />
                            <GoHomeButton />
                            <LogoutButton />
                        </>
                    ) : (<></>)}
                    {(calledFrom === 'shippingInfo' || calledFrom === 'paymentInfo' || calledFrom === "dashboard") ? (
                        <>
                            <GoHomeButton />  
                            <LogoutButton />
                        </>
                    ) : (<></>)}
                </div>
            </div>
        </StyledNavBar>
    )
}
