import NavBar from '../../features/nav/navBar';
import BrowseSearch from '../../features/nav/BrowseSearch';
import Orders from '../../features/orders/orders'
import Carts from '../../features/carts/carts'
import ProductsListing from '../../features/products/productsListing'

export default function DashboardDisplay () {
    return (
        <div>
            <NavBar calledFrom="dashboard" />
            <BrowseSearch />
            <Orders />
            <Carts />
            <ProductsListing />
        </div>
    )
}