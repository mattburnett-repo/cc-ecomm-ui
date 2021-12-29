
import { useDispatch, useSelector } from 'react-redux';

import { selectUserData } from '../auth/authSlice'
import { getOrdersByUserId } from '../orders/ordersSlice'
import { getSavedCartsByUserId } from '../carts/cartsSlice'
import { getProductCategories } from '../productCategory/productCategorySlice'
import { getProducts } from '../products/productsSlice'

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import DashboardDisplay from "../../components/dashboard/DashboardDisplay";

export default function Dashboard () {
    CheckLoginStatus()

    const dispatch = useDispatch()
    const userData = useSelector(selectUserData)
    const user_id = userData.user_id

    // FIXME: is this function calling the dispatches twice?
    //         it looks like there are two calls to each fetch...
    function loadData() {
        dispatch(getProductCategories());
        dispatch(getOrdersByUserId(user_id));       // FIXME: asdf.id = 4. there are no order records for this account yet
        // dispatch(getCurrentCart());
        dispatch(getSavedCartsByUserId(user_id));   // FIXME: asdf.id = 4. there are no cart records for this account yet
        dispatch(getProducts());
    };
    loadData();
    
    return <DashboardDisplay />
}
