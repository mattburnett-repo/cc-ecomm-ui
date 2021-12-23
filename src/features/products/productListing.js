import CheckLoginStatus from "../../utils/checkLoginStatus";
import ProductListingDisplay from "../../components/products/ProductListingDisplay";

import { mockProducts } from '../../utils/mockData';

export default function ProductListing () {
    CheckLoginStatus()
    
    // data should come from APi / Redux
 
    return <ProductListingDisplay data={ mockProducts } />

}