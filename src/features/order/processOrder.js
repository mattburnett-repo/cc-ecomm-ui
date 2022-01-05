

// import { useSelector } from 'react-redux'

// // https://youtu.be/377AQ0y6LPA?t=9753
// import { Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'

// import { selectCurrentPayment } from '../payments/paymentsSlice'
// import { selectCurrentCart } from '../carts/cartsSlice'
// import { selectCurrentAddress } from '../addresses/addressesSlice'
// import { selectUserData } from '../auth/authSlice'

// import OrderConfirmationDisplay from '../../components/order/OrderConfirmationDisplay'

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

// // Integration with commerce.js
// //  https://youtu.be/377AQ0y6LPA?t=10613

// // Basic integration
// // https://www.section.io/engineering-education/stripe-integration-react/

// export default async function ProcessOrder() {

//     const cardElements = useSelector(selectCurrentPayment)
//     const currentCart = useSelector(selectCurrentCart)
//     const currentAddress = useSelector(selectCurrentAddress)
//     const currentUser = useSelector(selectUserData)

//     // stripe default number: 4242 4242 4242 4242
//     //       default expDate: 04/24
//     //           default cvc: 242
//     //    default postalCode: 42242
//     const stripe = stripePromise

//     if(!stripe || !cardElements) {
//         console.log('processOrder: no stripe and/or cardElements')
//         return
//     }

//     // card: cardElements might be a problem to solve
//     const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElements})

//     // start order / payment processing
//     if(error) {
//         console.log('Error: processOrder createPaymentMethod() ', error)
//     } else {
//         // all the order data
//         //      selectCurrentCart
//         //      selectCurrentAddress
//         const orderData = {
//             line_items: currentCart,
//             customer: { firstname: currentUser.firstName, lastname: currentUser.lastName, email: currentUser.email },
//             shipping: { 
//                 name: 'Primary', 
//                 street: currentAddress.address1, 
//                 town_city: currentAddress.city,
//                 county_state: currentAddress.stateProvince,
//                 postal_zip_code: currentAddress.postalCode,
//                 country: currentAddress.country,
//             },
//             // FIXME: get real shipping_method instead of hard-code to DHL
//             fulfillment: { shipping_method: 'DHL' }, 
//             payment: {
//                 gateway: 'stripe',
//                 stripe: {
//                     payment_method_id: paymentMethod.id // comes from ca. ln 35
//                 }
//             }
//         }

//         // TODO: call stripe payment processing and dispatch order pieces, then clear out cart

//     } // end order / payment processing

//     return (
//         <>
//             <h3>Process Order</h3>
//             <h4>process Stripe payment, save order / address / payment / other data to database</h4>
//             <h4>handle outcome, display Order Confirmation</h4>    

//             {/* https://youtu.be/377AQ0y6LPA?t=10214 */}
//             {/* payment */}

//             {/* if payment */} 
//                 {/* insert order / cart / address / payment data */}
//                 {/* <OrderConfirmationDisplay data={???} /> */}
//             {/* else */}
//                 {/* display error/s */}
//         </>
//     )
// }