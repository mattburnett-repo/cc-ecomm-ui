
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from 'react-stripe-elements'

import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { selectJwtToken } from '../../features/auth/authSlice';

import CartSummary from '../../widgets/CartSummary'
import ShippingInfoSummary from '../../widgets/ShippingInfoSummary'

import { selectCurrentCartTotalPrice } from '../../features/carts/cartsSlice';
import { selectUserData } from '../../features/auth/authSlice';

import { setCurrentPayment } from '../../features/payments/currentPaymentActions'

import { StyledPaymentInfoDisplay } from '../styles/PaymentInfoDisplay.styled';

// https://stackoverflow.com/questions/70589309/react-stripe-injectstripe-hoc-stripe-createtoken-is-not-a-function

const PaymentInfoDisplay = ( props ) => {
    const { stripe } = props

    const authToken = useSelector(selectJwtToken)
    const currentCartTotalPrice = useSelector(selectCurrentCartTotalPrice)
    const userData = useSelector(selectUserData)

    const dispatch = useDispatch()
    const history = useHistory()

    const handleProcessPayment = async (event) => {
        event.preventDefault()
    
        const { token } = await stripe.createToken()

        // TODO: needs a spinner while processing
        async function fetchStripe() {
            const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
            const apiEndpoint = '/api/v1/payment/stripe/charge'
            const theUrl = API_BASE_URL + apiEndpoint

            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`},
                body: JSON.stringify({
                    // amount: selectedProduct.price.toString().replace('.', ''),
                    amount: currentCartTotalPrice.toString().replace('.', ''), 
                    source: token.id,
                    receipt_email: userData.email 
                }),
                credentials: 'include'           
            }

            function goToProcessOrder() {
                history.push('/process-order')
            }

            // TODO: display spinner until fetch promise resolves
            const response = await fetch(theUrl, requestOptions)
            const data = await response.json();       
            
            if(response.status === 200) {
                await dispatch(setCurrentPayment(data)) 
                goToProcessOrder()            
            } else {
                console.log('PaymentInfoDisplay ', response.status)
                console.log('end PaymentInfoDisplay / handleProcessPayment / fetchStripe / data: ', data)
                // display error page / message
            } // end if
        } // end fetchStripe

        fetchStripe();
    }

    return (
        <StyledPaymentInfoDisplay>
            <div role="presentation" aria-label='payment-info'>
                <CartSummary />
                <ShippingInfoSummary />
                <form onSubmit={handleProcessPayment}>
                <label>
                    Card details
                    <CardNumberElement />
                </label>
                <label>
                    Expiration date
                    <CardExpiryElement />
                </label>
                <label>
                    CVC
                    <CardCVCElement />
                </label>
                <button type="submit" className="order-button">
                    Pay
                </button>
                </form>
            </div>
        </StyledPaymentInfoDisplay>
    )
} // PaymentInfoDisplay

export default injectStripe(PaymentInfoDisplay)

