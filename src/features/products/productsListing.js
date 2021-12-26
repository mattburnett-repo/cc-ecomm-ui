import CheckLoginStatus from "../../utils/checkLoginStatus";
import ProductsListingDisplay from "../../components/products/ProductsListingDisplay";

import { mockProducts } from '../../utils/mockData';

export default function ProductsListing () {
    CheckLoginStatus()
    
    // data should come from APi / Redux
 
    return <ProductsListingDisplay data={ mockProducts } />

}