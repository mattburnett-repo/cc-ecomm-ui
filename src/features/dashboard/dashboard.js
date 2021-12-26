import { useDispatch } from 'react-redux';

import { getOrders } from '../orders/ordersSlice'
import { getCarts } from '../carts/cartsSlice'
import { getProductCategories } from '../productCategory/productCategorySlice'
import { getProducts, getProductById } from '../products/productsSlice'

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import DashboardDisplay from "../../components/dashboard/DashboardDisplay";

export default function Dashboard () {
    CheckLoginStatus()

    const dispatch = useDispatch()

    // don't understand how loadData() works without async / await, but it does what we want it to
    //      async / await, useEffect( etc. don't work...

    // FIXME: is this function calling the dispatches twice?
    //         there are two calls to each fetch...
    function loadData() {
        dispatch(getProductCategories());
        dispatch(getOrders()); 
        dispatch(getCarts());
        dispatch(getProducts());
        dispatch(getProductById(2))
    };
    loadData();

    return <DashboardDisplay />
}