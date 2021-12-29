import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { getOrders } from '../orders/ordersSlice'
// import { getSavedCarts, getCurrentCart } from '../carts/cartsSlice'
import { getSavedCarts } from '../carts/cartsSlice'
import { getProductCategories } from '../productCategory/productCategorySlice'
import { getProducts } from '../products/productsSlice'

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import DashboardDisplay from "../../components/dashboard/DashboardDisplay";

export default function Dashboard () {
    CheckLoginStatus()

    const dispatch = useDispatch()

    // FIXME: is this function calling the dispatches twice?
    //         there are two calls to each fetch...
    function loadData() {
        dispatch(getProductCategories());
        dispatch(getOrders()); 
        // dispatch(getCurrentCart());
        dispatch(getSavedCarts());
        dispatch(getProducts());
    };
    

    useEffect(() => {
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <DashboardDisplay />
}