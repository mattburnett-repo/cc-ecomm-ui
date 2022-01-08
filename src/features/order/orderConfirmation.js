
import { useSelector } from 'react-redux'

import { selectCurrentOrder, selectIsLoading } from '../orders/ordersSlice'
import { selectCurrentPayment } from '../payments/paymentsSlice'
import { selectCurrentAddress } from "../addresses/addressesSlice"

import OrderConfirmationDisplay from '../../components/order/OrderConfirmationDisplay'

export default function OrderConfirmation () {

    const isLoading = useSelector(selectIsLoading)
    const currentOrder = useSelector(selectCurrentOrder)
    const currentPayment = useSelector(selectCurrentPayment)
    const currentAddress = useSelector(selectCurrentAddress)    

    // console.log('OrderConfirmation: currentOrder ', currentOrder)
    // console.log('OrderConfirmation: currentPayment ', currentPayment)
    // console.log('OrderConfirmation: currentAddress ', currentAddress)

    if(isLoading || currentOrder.length == 0) {
        return <h4> loading </h4>
    } else {   
        return <OrderConfirmationDisplay currentOrder={ currentOrder } currentPayment={currentPayment} currentAddress={currentAddress} /> 
    }
}