import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getOrders, selectOrders } from './ordersSlice';

import CheckLoginStatus from '../../utils/CheckLoginStatus';
import OrdersDisplay from '../../components/orders/OrdersDisplay';

import { mockOrderData } from '../../utils/mockData';

export default function Orders () {
    CheckLoginStatus()
    
    const dispatch = useDispatch()

    // useEffect(() => {   
    //     dispatch(getOrders())
    // },[dispatch])

    // const ordersData = useSelector(selectOrders)
    const ordersData = dispatch(getOrders())
    // const ordersData = mockOrderData
    
    // return <h2>testing</h2>
    
    return (
        <>
            <h2>testing with mock data, even though we make a fetch for orders data</h2>
            <OrdersDisplay ordersData={ordersData} />
        </>
    )
}