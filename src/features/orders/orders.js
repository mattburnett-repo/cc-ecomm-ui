import { useSelector } from 'react-redux';
import { selectOrders } from './ordersSlice';

import CheckLoginStatus from '../../utils/CheckLoginStatus';
import OrdersDisplay from '../../components/orders/OrdersDisplay';

import { mockOrderData } from '../../utils/mockData';

export default function Orders () {
    CheckLoginStatus()

    const ordersData = useSelector(selectOrders)
    console.log('orders / ordersData', ordersData)
    // const ordersData = mockOrderData
    
    return (
        <>
            {/* <h2>testing with mock data, even though we make a fetch for orders data</h2> */}
            <OrdersDisplay ordersData={ordersData} />
        </>
    )
}