import { useSelector } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ProductsListingDisplay from "../../components/products/ProductsListingDisplay";

import { selectProducts } from '../products/productsSlice'

export default function ProductsListing () {
    CheckLoginStatus()

    function handleImageClick () {
        alert('handleImageClick')
    }

    function handlers() {
        return {
            handleImageClick: handleImageClick
        }
    }
    
    const productsData = useSelector(selectProducts) // loaded from dispatch in dashboard.js

    return <ProductsListingDisplay data={ productsData } handlers={handlers}/>

}