
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectUserData } from '../auth/authSlice';
import { selectCurrentCart } from '../carts/cartsSlice';
import { selectCurrentAddress } from '../addresses/addressesSlice';
import { selectCurrentPayment } from '../payments/paymentsSlice';
import { saveOrderData, selectIsLoading } from '../orders/ordersSlice';

import { clearCurrentCart } from '../carts/currentCartActions';
import { clearCurrentOrder } from '../orders/currentOrderActions';

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import OrderConfirmation from './orderConfirmation';

// import LoadingMessage from '../../components/loading/LoadingMessage';

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

    // FIXME: clear out data after everything is completed, so we can't reload the page and place another order
    useEffect(() => {
        dispatch(saveOrderData({orderData}))
        dispatch(clearCurrentCart())
        dispatch(clearCurrentOrder())
        // eslint-disable-next-line 
    }, [])

    if(isLoading) {
        // FIXME:
        // return <LoadingMessage type="spinner" />
        return <h4>loading</h4>
    } else {  
        return <OrderConfirmation />
    }
}
