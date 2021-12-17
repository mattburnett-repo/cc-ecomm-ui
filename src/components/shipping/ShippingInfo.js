export default function ShippingInfo () {
    return (
        <div>
            <div>
                <label htmlFor="first-name">First Name:</label>
                <input id='first-name' aria-label="first-name"/>
            </div>
            <div>
                <label htmlFor="last-name">Last Name:</label>
                <input id='last-name' aria-label="last-name"/>
            </div>
            <div>
                <label htmlFor="address-1">Address 1:</label>
                <input id='address-1' aria-label="address-1"/>
            </div>
            <div>
                <label htmlFor="address-2">Address 2:</label>
                <input id='address-2' aria-label="address-2"/>
            </div>
            <div>
                <label htmlFor="city">City:</label>
                <input id='city' aria-label="city"/>
            </div>
            <div>
                <label htmlFor="state-province">State / Province:</label>
                <input id='state-province' aria-label="state-province"/>
            </div>
            <div>
                <label htmlFor="postal-code">Postal Code:</label>
                <input id='postal-code' aria-label="postal-code"/>
            </div>
            <div>
                <label htmlFor="country">Country:</label>
                <input id='country' aria-label="country"/>
            </div>
            <button aria-label="go-to-payment-info">Go To Payment Info</button>
        </div>
    )
}