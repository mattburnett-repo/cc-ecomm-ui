import NavBar from '../../features/nav/navBar';
import BrowseSearch from '../../features/nav/BrowseSearch';
import OrdersAndCartsHistoryDisplay from './OrdersAndCartsHistoryDisplay'
import ProductsListing from '../../features/products/productsListing'

export default function DashboardDisplay () {
    
    return (
        <div>
            <NavBar calledFrom="dashboard" />
            <BrowseSearch />
            <OrdersAndCartsHistoryDisplay />
            <ProductsListing />
        </div>
    )
}