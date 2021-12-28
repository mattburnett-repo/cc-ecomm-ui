import NavBar from '../../features/nav/navBar';
import BrowseSearch from '../../features/nav/BrowseSearch';
import Orders from '../../features/orders/orders'
import Carts from '../../features/carts/carts'
import ProductsListing from '../../features/products/productsListing'
import ProductDetail from '../../features/product/productDetail'

export default function DashboardDisplay () {
    const randomProductId =  Math.floor(Math.random() * 31);

    return (
        <div>
            <NavBar calledFrom="dashboard" />
            <BrowseSearch />
            <ProductDetail productId={randomProductId}/> 
            <Orders />
            <Carts />
            <ProductsListing />
        </div>
    )
}