import { useSelector } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ProductsListingDisplay from "../../components/products/ProductsListingDisplay";

import { selectProducts } from '../products/productsSlice'

export default function ProductsListing () {
    CheckLoginStatus()

    function handleImageClick (e) {
        alert('handleImageClick ' + e.target.id)
        // redirect to product-detail with e.target.id as productId
    }
    function handleAddToCart(e){
        alert('handleAddToCart ' + e.target.id)
    }

    function handlers() {
        return {
            handleImageClick: handleImageClick,
            handleAddToCart: handleAddToCart
        }
    }
    
    // const productsData = useSelector(selectProducts) // loaded from dispatch in dashboard.js

    // return <ProductsListingDisplay data={ productsData } handlers={handlers()}/>
    return <ProductsListingDisplay data={ useSelector(selectProducts) } handlers={handlers()}/>

}