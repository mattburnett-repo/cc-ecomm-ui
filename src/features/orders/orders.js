import { useSelector } from 'react-redux';
import { selectOrders } from './ordersSlice';

import CheckLoginStatus from '../../utils/CheckLoginStatus';
import OrdersDisplay from '../../components/orders/OrdersDisplay';

export default function Orders () {
    CheckLoginStatus()

    const ordersData = useSelector(selectOrders)
    
    return <OrdersDisplay ordersData={ordersData} />
    
}