import { useSelector } from 'react-redux';
import { selectSavedOrders } from './ordersSlice';

import CheckLoginStatus from '../../utils/CheckLoginStatus';
import OrdersDisplay from '../../components/orders/OrdersDisplay';

import { handleOrderClick } from '../../utils/handlers';

export default function Orders () {
    CheckLoginStatus()

    function handlers() {
        return {
            handleOrderClick: handleOrderClick,
        }
    }

    const ordersData = useSelector(selectSavedOrders)

    // TODO: order detail is not in the spec / wireframes, but it makes sense to have it as a feature
    return <OrdersDisplay ordersData={ordersData} handlers={handlers()}/>
    
}