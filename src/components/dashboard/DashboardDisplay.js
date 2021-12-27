import NavBar from '../../features/nav/navBar';
import BrowseSearch from '../../features/nav/BrowseSearch';
import Orders from '../../features/orders/orders'
import Carts from '../../features/carts/carts'
import ProductsListing from '../../features/products/productsListing'
import ProductDetail from '../../features/product/productDetail'

export default function DashboardDisplay () {
    return (
        <div>
            <NavBar calledFrom="dashboard" />
            <BrowseSearch />
            <ProductDetail productId="18"/>
            <Orders />
            <Carts />
            <ProductsListing />
        </div>
    )
}