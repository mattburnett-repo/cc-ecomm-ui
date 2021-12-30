import { useSelector } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ProductsListingDisplay from "../../components/products/ProductsListingDisplay";

import { selectProducts } from '../products/productsSlice'

export default function ProductsListing () {
    CheckLoginStatus()

    // product state data loaded from dispatch in dashboard.js. get it with selector
    return <ProductsListingDisplay data={ useSelector(selectProducts) } />
}