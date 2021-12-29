import { useSelector } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ProductsListingDisplay from "../../components/products/ProductsListingDisplay";

import { handleImageClick } from "../../utils/handlers";

import { selectProducts } from '../products/productsSlice'

import { handleAddToCart } from "../../utils/handlers";

export default function ProductsListing () {
    CheckLoginStatus()

    function handlers() {
        return {
            handleImageClick: handleImageClick,
            handleAddToCart: handleAddToCart
        }
    }

    // product state data loaded from dispatch in dashboard.js
    return <ProductsListingDisplay data={ useSelector(selectProducts) } handlers={handlers()}/>
}