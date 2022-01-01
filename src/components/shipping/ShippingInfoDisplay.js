
// import PropTypes from 'prop-types';

// TODO: should have PropTypes in this, and other, didsplay component/s

export default function ShippingInfoDisplay (props) {
    const { handleSaveShippingInfo, handleGoToPaymentInfo } = props.handlers
   
    return (
        <div role="presentation" aria-label="shipping-info">
            <h3>Shipping Info</h3>
            <form onSubmit={handleSaveShippingInfo} method="post">
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

                <button aria-label="save-shipping-info">Save Shipping Info</button>
            </form>
            {/* if ave successful, display this button */}
            <button aria-label="go-to-payment-info" onClick={handleGoToPaymentInfo}>Go To Payment Info</button>
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