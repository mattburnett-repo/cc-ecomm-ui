
import { useSelector } from 'react-redux'

import { selectCurrentOrder, selectIsLoading } from '../orders/ordersSlice'
import { selectCurrentPayment } from '../payments/paymentsSlice'
import { selectCurrentAddress } from "../addresses/addressesSlice"

import CheckLoginStatus from "../../utils/CheckLoginStatus";

import OrderConfirmationDisplay from '../../components/order/OrderConfirmationDisplay'

export default function OrderConfirmation () {
    CheckLoginStatus()
    
    const isLoading = useSelector(selectIsLoading)
    const currentOrder = useSelector(selectCurrentOrder)
    const currentPayment = useSelector(selectCurrentPayment)
    const currentAddress = useSelector(selectCurrentAddress)    

    // eslint-disable-next-line 
    // if(isLoading || currentOrder.length == 0) {
    if(isLoading) {
        return <h4> loading </h4>
    } else {   
        return <OrderConfirmationDisplay currentOrder={ currentOrder } currentPayment={currentPayment} currentAddress={currentAddress} /> 
    }
}