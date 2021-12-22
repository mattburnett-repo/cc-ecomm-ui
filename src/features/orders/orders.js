import { useSelector, useDispatch } from 'react-redux';

import { getOrders } from './ordersSlice';

import OrdersDisplay from '../../components/orders/OrdersDisplay';

import { mockOrderData } from '../../utils/mockData';

export default function Orders () {
    const dispatch = useDispatch()

    const ordersData = mockOrderData
    // const ordersData = dispatch(getOrders())

    return (
        <>
            <OrdersDisplay ordersData={ordersData} />
        </>
    )
}