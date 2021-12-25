import { useEffect  } from 'react'
import { useDispatch } from 'react-redux';

import { getOrders } from '../orders/ordersSlice'
// import { getCarts } from '../carts/cartsSlice'

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import DashboardDisplay from "../../components/dashboard/DashboardDisplay";

export default function Dashboard () {
    CheckLoginStatus()

    const dispatch = useDispatch()

    // data gets loaded here, but is accessed / selected in individual features (zB features/orders, features/cars)
    // useEffect(() => {
    //     async function loadData() { // add authIsExpired test
    //         console.log('useEffect loadData / getOrders')
    //         await dispatch(getOrders()); 
    //         // await dispatch(getCarts());
    //     };
    //     loadData();
    // }, [dispatch]); 

    async function loadData() { // add authIsExpired test
        await dispatch(getOrders()); 
        // await dispatch(getCarts());
    };
    loadData();

    return <DashboardDisplay />
}