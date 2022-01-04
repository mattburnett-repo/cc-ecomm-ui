

import PaymentTypesDropdown from "../../widgets/PaymentTypesDropdown"

export default function PaymentInfoDisplay (props) {
    const { handleFinishOrder } = props.handlers

    return (
        <div role="presentation" aria-label="payment-info">
            <h3>Payment Info</h3>
            <h4>TODO: Show cart / order data here (item count and total amount)</h4>
            <h4>TODO: Show shipping info data here</h4>

            <PaymentTypesDropdown />
            
            <form onSubmit={handleFinishOrder} method="post">
                <div>
                    <label htmlFor="name-on-card">Name on Card:</label>
                    <input id="name-on-card" name="nameOnCard" aria-label="name-on-card" />
                </div>
                <div>
                    <label htmlFor="card-number">Card Number:</label>
                    <input id="card-number" name="cardNumber" aria-label="card-number" />
                </div>
                <div>
                    <label htmlFor="expiration-date">Exp. Date:</label>
                    <input id="xpiration-date" name="expDate" aria-label="expiration-date" />
                </div>
                <button type="submit" aria-label="save-payment-info">Save Payment Info For Later Use</button>
            </form>
            <button type="submit" aria-label="finish-order">Finish Order</button>
        </div>
    )
}
