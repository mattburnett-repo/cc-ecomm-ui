import { useSelector } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import BrowseSearchDisplay from '../../components/nav/BrowseSearchDisplay';

import { selectProductCategories } from "../productCategory/productCategorySlice";

export default function BrowseSearch () {
    CheckLoginStatus()

    function handleChange(){
        // should dispatch getProduct/category/:category_id
        //      we probably need a new slice / route / etc 
        //      can we query the store on category_id?
        //          something like useSelector(selectProducts(category_id = asdf))
        //          we already pulled all of the data...
        alert('handleChange')
    }
    function handleSearch(){
        alert('handleSearch')
    }
    
    // TODO: create handlers function to pass into display component
    
    function handlers() {
        return {
            handleChange: handleChange,
            handleSearch: handleSearch,
        }
    }

    const productCategories = useSelector(selectProductCategories)

    return <BrowseSearchDisplay  data={ productCategories } handlers={handlers()}/>
}