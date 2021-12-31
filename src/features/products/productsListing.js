import { useSelector } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ProductsListingDisplay from "../../components/products/ProductsListingDisplay";

import { selectProducts } from '../products/productsSlice'
// import { handleQuantityChange} from "../../utils/handlers";

export default function ProductsListing () {
    CheckLoginStatus()

    // function handlers() {
    //     return {
    //         handleQuantityChange: handleQuantityChange
    //     }
    // }
    // product state data loaded from dispatch in dashboard.js. get it with selector
    return <ProductsListingDisplay data={ useSelector(selectProducts)} />
}