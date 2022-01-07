
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectUserData } from '../auth/authSlice';
import { selectCurrentCart } from '../carts/cartsSlice';
import { selectCurrentAddress } from '../addresses/addressesSlice';
import { selectCurrentPayment } from '../payments/paymentsSlice';
import { saveOrderData, selectIsLoading } from '../orders/ordersSlice';

import { setCurrentOrder } from '../orders/currentOrderActions';

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import OrderConfirmationDisplay from "../../components/order/OrderConfirmationDisplay";

import LoadingMessage from '../../components/loading/LoadingMessage';
import { mockOrderConfirmationData } from '../../utils/mockData';

export default function ProcessOrder() {
    CheckLoginStatus()

    const dispatch = useDispatch()
    const user = useSelector(selectUserData)
    const isLoading = useSelector(selectIsLoading)

    // FIXME: also needs cart total amount
    const orderData = {
        user_id: user.user_id,
        cartInfo: useSelector(selectCurrentCart),
        shippingInfo: useSelector(selectCurrentAddress),
        paymentInfo: useSelector(selectCurrentPayment)
    }

    // dispatch(setCurrentOrder(orderData))

    useEffect(() => {
        dispatch(saveOrderData({orderData}))
    }, [])
    
    // get the isLoading from saveOrderData, display spinner until resolved, then show OrderConfirmationDisplay

    if(isLoading) {
        // FIXME:
        return <LoadingMessage type="spinner" />
    } else {
        return <OrderConfirmationDisplay data={ mockOrderConfirmationData } />        
    }
}
