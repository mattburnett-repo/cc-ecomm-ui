
import { useDispatch, useSelector } from 'react-redux';

import { selectUserData } from '../auth/authSlice'
import { getOrdersByUserId } from '../orders/ordersSlice'
import { getSavedCartsByUserId } from '../carts/cartsSlice'
import { getAddressesByUserId } from '../addresses/addressesSlice'
import { getProductCategories } from '../productCategory/productCategorySlice'
import { getProducts } from '../products/productsSlice'

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import DashboardDisplay from "../../components/dashboard/DashboardDisplay";

export default function Dashboard () {
    CheckLoginStatus()

    const dispatch = useDispatch()
    // eslint-disable-next-line no-unused-vars
    const userData = useSelector(selectUserData)
    // const user_id = userData.user_id // FIXME: asdf.id = 4. there are no order records for account asdf yet
    const user_id = 1

    // FIXME: is this function calling the dispatches twice?
    //         it looks like there are two calls to each fetch...
    function loadData() {
        dispatch(getProductCategories());
        dispatch(getOrdersByUserId(user_id));       
        dispatch(getSavedCartsByUserId(user_id)); 
        dispatch(getAddressesByUserId(user_id))
        dispatch(getProducts());
    };
    loadData();
    
    return <DashboardDisplay />
}
