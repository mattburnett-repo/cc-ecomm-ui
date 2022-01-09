
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { selectUserData } from '../auth/authSlice';
import { selectCurrentCart } from '../carts/cartsSlice';
import { selectCurrentAddress } from '../addresses/addressesSlice';
import { selectCurrentPayment } from '../payments/paymentsSlice';
import { saveOrderData } from '../orders/ordersSlice';

import CheckLoginStatus from "../../utils/CheckLoginStatus";

export default function ProcessOrder() {
    CheckLoginStatus()

    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector(selectUserData)
    // const isLoading = useSelector(selectIsLoading)

    // FIXME: also needs cart total amount
    const orderData = {
        user_id: user.user_id,
        cartInfo: useSelector(selectCurrentCart),
        shippingInfo: useSelector(selectCurrentAddress),
        paymentInfo: useSelector(selectCurrentPayment)
    }

    useEffect(() => {
        dispatch(saveOrderData({orderData}))
        history.push('/order-confirmation')
        // eslint-disable-next-line 
    }, [])

    return null // no render, so return null
}
