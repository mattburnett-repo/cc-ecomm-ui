// import { useEffect  } from 'react'
import { useDispatch } from 'react-redux';

import { getOrders } from '../orders/ordersSlice'
import { getCarts } from '../carts/cartsSlice'

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import DashboardDisplay from "../../components/dashboard/DashboardDisplay";

export default function Dashboard () {
    CheckLoginStatus()

    const dispatch = useDispatch()

    // data gets loaded here, but is accessed / selected in individual features (zB features/orders, features/carts)
    // useEffect(() => {
    //     async function loadData() { // add authIsExpired test
    //         console.log('useEffect loadData / getOrders')
    //         await dispatch(getOrders()); 
    //         // await dispatch(getCarts());
    //     };
    //     loadData();
    // }, [dispatch]); 

    // const someVar = () => dispatch(someDispatch())

    async function loadData() { 
        await dispatch(getOrders()); 
        await dispatch(getCarts());
    };
    // }();
    loadData();

    return <DashboardDisplay />
}