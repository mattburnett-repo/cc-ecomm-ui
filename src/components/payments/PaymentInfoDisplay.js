
import { useSelector } from 'react-redux'

import CartSummary from '../../widgets/CartSummary'
import ShippingInfoSummary from '../../widgets/ShippingInfoSummary'



// import PaymentTypesDropdown from "../../widgets/PaymentTypesDropdown"

export default function PaymentInfoDisplay (props) {
    const { handleFinishOrder } = props.handlers
    const { paymentTypes } = props

    return (
        <div role="presentation" aria-label="payment-info">
            <h3>Payment Info</h3>
            <CartSummary />
            <ShippingInfoSummary />
        
            <form onSubmit={handleFinishOrder} method="post">
                {/* FIXME: this crashes the tests <PaymentTypesDropdown /> */}
                <div role="presentation" aria-label='payment-types'>
                    <label htmlFor='payment-types-selector'>Payment Types:</label>
                    <select role="presentation" id='payment-types-selector' aria-label='payment-types-selector' 
                        name="paymentTypes" defaultValue="0">
                            {paymentTypes.map((i, index) => (
                                <option key={index} value={index}>{i.description}</option>
                            ))}
                    </select>
                </div>
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
                    <input id="expiration-date" name="expDate" aria-label="expiration-date" />
                </div>
                {/* TODO: this is a good idea, but it isn't in the wireframe/spec. Come back to it later */}
                {/* <button type="submit" aria-label="save-payment-info">Save Payment Info For Later Use</button> */}
                <button type="submit" aria-label="finish-order">Finish Order</button>
            </form>
        </div>
    )
}
