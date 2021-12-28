import { useSelector } from 'react-redux';
import { selectOrders } from './ordersSlice';

import CheckLoginStatus from '../../utils/CheckLoginStatus';
import OrdersDisplay from '../../components/orders/OrdersDisplay';

export default function Orders () {
    CheckLoginStatus()

    function handleOrderClick(e) {
        e.preventDefault()

        let order_id = e.target.order_id.value
        alert('go to order detail component ' + order_id)
    }
    
    function handlers() {
        return {
            handleOrderClick: handleOrderClick,
        }
    }

    const ordersData = useSelector(selectOrders)
    
    return <OrdersDisplay ordersData={ordersData} handlers={handlers()}/>
    
}