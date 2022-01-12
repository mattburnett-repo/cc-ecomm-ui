
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { selectUserData } from '../auth/authSlice'
import { getOrdersByUserId } from '../orders/ordersSlice'
import { getSavedCartsByUserId } from '../carts/cartsSlice'
import { getAddressesByUserId } from '../addresses/addressesSlice'
import { getPaymentsByUserId, getPaymentTypes } from '../payments/paymentsSlice';
import { getProductCategories } from '../productCategory/productCategorySlice'
import { getProducts } from '../products/productsSlice'

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import DashboardDisplay from "../../components/dashboard/DashboardDisplay";

export default function Dashboard () {
    CheckLoginStatus()

    const dispatch = useDispatch()
    // eslint-disable-next-line no-unused-vars
    const userData = useSelector(selectUserData)
    const user_id = userData.user_id 

    // async function loadData() {
    //     // let msg = ''
    //     // msg = await dispatch(getProductCategories())
    //     // console.log('dashboard msg ', msg.meta.requestStatus)
    //     await dispatch(getProductCategories())
    //     await dispatch(getOrdersByUserId(user_id))    
    //     await dispatch(getSavedCartsByUserId(user_id))
    //     await dispatch(getAddressesByUserId(user_id))
    //     await dispatch(getPaymentsByUserId(user_id))
    //     await dispatch(getPaymentTypes())
    //     await dispatch(getProducts())
    // };
    // loadData();

    useEffect(() => {
        dispatch(getProductCategories())
        dispatch(getOrdersByUserId(user_id))    
        dispatch(getSavedCartsByUserId(user_id))
        dispatch(getAddressesByUserId(user_id))
        dispatch(getPaymentsByUserId(user_id))
        dispatch(getPaymentTypes())
        dispatch(getProducts())
    // eslint-disable-next-line
    },[])
    
    return <DashboardDisplay />
}
