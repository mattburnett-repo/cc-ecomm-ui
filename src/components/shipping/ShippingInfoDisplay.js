
import CartSummary from '../../widgets/CartSummary'
import NavBar from '../../features/nav/navBar'

// TODO: should have PropTypes in this, and other, didsplay component/s
// import PropTypes from 'prop-types';

import { StyledShippingInfoDisplay } from '../styles/ShippingInfoDisplay.styled'

export default function ShippingInfoDisplay (props) {
    const { handleGoToPaymentInfo } = props.handlers

    return (
        <>
            <NavBar calledFrom="shippingInfo" />
        
            <StyledShippingInfoDisplay>
                <h3>Shipping Info</h3>
                <CartSummary />
                
                <div id="shipping-info" role="presentation" aria-label="shipping-info">
                    <form onSubmit={handleGoToPaymentInfo} method="post">  
                        <div id="first-name">
                            <label htmlFor="first-name">First Name:</label>
                            <input id='first-name' name="firstName" aria-label="first-name" required/>
                        </div>
                        <div id="last-name">
                            <label htmlFor="last-name">Last Name:</label>
                            <input id='last-name' name="lastName" aria-label="last-name" required/>
                        </div>
                        <div id="address-1">
                            <label htmlFor="address-1">Address 1:</label>
                            <input id='address-1' name="address1" aria-label="address-1" required/>
                        </div>
                        <div id="address-2">
                            <label htmlFor="address-2">Address 2:</label>
                            <input id='address-2' name="address2" aria-label="address-2"/>
                        </div>
                        <div id="city">
                            <label htmlFor="city">City:</label>
                            <input id='city' name="city" aria-label="city" required/>
                        </div>
                        <div id="state-province">
                            <label htmlFor="state-province">State / Province:</label>
                            <input id='state-province' name="stateProvince" aria-label="state-province" required/>
                        </div>
                        <div id="postal-code">
                            <label htmlFor="postal-code">Postal Code:</label>
                            <input id='postal-code' name="postalCode" aria-label="postal-code" required/>
                        </div>
                        <div id="country">
                            <label htmlFor="country">Country:</label>
                            <input id='country' name="country" aria-label="country" required/>
                        </div>
                        <br/>
                        <button type="submit" aria-label="go-to-payment-info">Go To Payment Info</button>
                    </form> 
                </div>
            </StyledShippingInfoDisplay>
        </>
    )
}

// PropTypes
// ShippingInfoDisplay.propTypes = {
//     firstName: PropTypes.string.isRequired,
//     lastName: PropTypes.string.isRequired,
//     address1: PropTypes.string.isRequired,
//     address2: PropTypes.string,
//     city: PropTypes.string.isRequired,
//     stateProvince: PropTypes.string.isRequired,
//     country: PropTypes.string.isRequired
// }