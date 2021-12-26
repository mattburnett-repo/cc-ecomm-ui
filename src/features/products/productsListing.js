import { useSelector } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ProductsListingDisplay from "../../components/products/ProductsListingDisplay";

import { selectProductsListing } from '../products/productsSlice'

export default function ProductsListing () {
    CheckLoginStatus()
    
    const productsData = useSelector(selectProductsListing) // loaded from dispatch in dashboard.js

    return <ProductsListingDisplay data={ productsData } />

}