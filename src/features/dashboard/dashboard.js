import { useDispatch } from 'react-redux';

import { getOrders } from '../orders/ordersSlice'
import { getCarts } from '../carts/cartsSlice'

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import DashboardDisplay from "../../components/dashboard/DashboardDisplay";

export default function Dashboard () {
    CheckLoginStatus()

    const dispatch = useDispatch()

    // don't understand how this works without async / await, but it does
    //      async / await, useEffect( etc. don't work...
    function loadData() {
        dispatch(getOrders()); 
        dispatch(getCarts());
    };
    loadData();

    return <DashboardDisplay />
}