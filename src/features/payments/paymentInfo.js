
import { StripeProvider, Elements } from 'react-stripe-elements'

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import PaymentInfoDisplay from '../../components/payments/PaymentInfoDisplay'

export default function PaymentInfo() {
    CheckLoginStatus()
    
    // https://stackoverflow.com/questions/70589309/react-stripe-injectstripe-hoc-stripe-createtoken-is-not-a-function

    return (
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
            <Elements>
                <PaymentInfoDisplay  />
            </Elements>
        </StripeProvider>        
    )
}
