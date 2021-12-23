// import { useSelector, useDispatch } from 'react-redux';

// import { getOrders } from './ordersSlice';

import CheckLoginStatus from '../../utils/CheckLoginStatus';
import OrdersDisplay from '../../components/orders/OrdersDisplay';

import { mockOrderData } from '../../utils/mockData';

export default function Orders () {
    CheckLoginStatus()
    
    // const dispatch = useDispatch()

    const ordersData = mockOrderData
    // const ordersData = dispatch(getOrders())

    return (
        <>
            <OrdersDisplay ordersData={ordersData} />
        </>
    )
}