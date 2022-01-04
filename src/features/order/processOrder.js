

import OrderConfirmationDisplay from '../../components/order/OrderConfirmationDisplay'

// https://youtu.be/377AQ0y6LPA?t=9753

export default function ProcessOrder() {
    return (
        <>
            <h3>Process Order</h3>
            <h4>process Stripe payment, save order / address / payment / other data to database</h4>
            <h4>handle outcome, display Order Confirmation</h4>    

            {/* payment */}

            {/* if payment */} 
                {/* insert order / cart / address / payment data */}
                {/* <OrderConfirmationDisplay data={???} /> */}
            {/* else */}
                {/* display error/s and apologize */}
        </>
    )
}