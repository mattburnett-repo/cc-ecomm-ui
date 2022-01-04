

import { useHistory } from 'react-router-dom'

import CartSummary from '../../widgets/CartSummary'

// TODO: should have PropTypes in this, and other, didsplay component/s
// import PropTypes from 'prop-types';

export default function ShippingInfoDisplay (props) {
    const { handleSaveShippingInfo } = props.handlers
    const { savedAddresses, currentCart } = props

    const history = useHistory()
    
    return (
        <div role="presentation" aria-label="shipping-info">
            <h3>Shipping Info</h3>
            <CartSummary />
            <form onSubmit={handleSaveShippingInfo} method="post">            
                {(savedAddresses.length > 0) ?
                    (<div role='presentation' aria-label="saved-addresses-display">
                        {/* TODO: this should be a dropdown, and should auto-fill the address fields after onChange event */}
                        You have {savedAddresses.length} saved address/es
                    </div>)
                    : <></>
                }
                <div>
                    <label htmlFor="first-name">First Name:</label>
                    <input id='first-name' name="firstName" aria-label="first-name"/>
                </div>
                <div>
                    <label htmlFor="last-name">Last Name:</label>
                    <input id='last-name' name="lastName" aria-label="last-name"/>
                </div>
                <div>
                    <label htmlFor="address-1">Address 1:</label>
                    <input id='address-1' name="address1" aria-label="address-1"/>
                </div>
                <div>
                    <label htmlFor="address-2">Address 2:</label>
                    <input id='address-2' name="address2" aria-label="address-2"/>
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input id='city' name="city" aria-label="city"/>
                </div>
                <div>
                    <label htmlFor="state-province">State / Province:</label>
                    <input id='state-province' name="stateProvince" aria-label="state-province"/>
                </div>
                <div>
                    <label htmlFor="postal-code">Postal Code:</label>
                    <input id='postal-code' name="postalCode" aria-label="postal-code"/>
                </div>
                <div>
                    <label htmlFor="country">Country:</label>
                    <input id='country' name="country" aria-label="country"/>
                </div>

                <button type="submit" aria-label="save-shipping-info">Save Shipping Info For Later Use</button>
            </form>
            {/* TODO: if save successful, display this button */}
            {/* <button aria-label="go-to-payment-info" onClick={handleGoToPaymentInfo}>Go To Payment Info</button> */}
            <button aria-label="go-to-payment-info" onClick={() => history.push('/payment-info')}>Go To Payment Info</button>
        </div>
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