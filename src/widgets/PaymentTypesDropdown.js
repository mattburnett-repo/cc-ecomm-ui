
import { useSelector } from 'react-redux'

import { selectPaymentTypes } from '../features/payments/paymentsSlice'

export default function PaymentTypesDropdown() {
    const paymentTypes = useSelector(selectPaymentTypes)

    // TODO: dispatch?

    return (
        <div role="presentation" aria-label='payment-types'>
            <label htmlFor='payment-types-selector'>Payment Types:</label>
            <select role="presentation" id='payment-types-selector' aria-label='payment-types-selector' 
                name="paymentTypes" defaultValue="0">

                {paymentTypes.map((i, index) => (
                    <option key={index} value={i}>{i.description}</option>
                ))}

            </select>
        </div>
    )
}