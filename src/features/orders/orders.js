import { useSelector } from 'react-redux';
import { selectSavedOrders } from './ordersSlice';

import CheckLoginStatus from '../../utils/CheckLoginStatus';
import OrdersDisplay from '../../components/orders/OrdersDisplay';

export default function Orders () {
    CheckLoginStatus()

    const ordersData = useSelector(selectSavedOrders)

    return <OrdersDisplay ordersData={ordersData} />    
}