import NavBar from '../../features/nav/navBar';

import OrdersAndCartsHistoryDisplay from './OrdersAndCartsHistoryDisplay'
import ProductsListing from '../../features/products/productsListing'

export default function DashboardDisplay () {
    
    return (
        <div>
            <NavBar calledFrom="dashboard" />
            <OrdersAndCartsHistoryDisplay />
            <ProductsListing />
        </div>
    )
}