import { useSelector } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import BrowseSearchDisplay from '../../components/nav/BrowseSearchDisplay';

import { selectProductCategories } from "../productCategory/productCategorySlice";
// eslint-disable-next-line 
import { getProducts, getProductsByCategory } from "../products/productsSlice";

export default function BrowseSearch () {
    CheckLoginStatus()

    // TODO: need to figure out how to get dispatch() to work from here
    function handleChange(e){
        let categoryId = e.target.value

        // eslint-disable-next-line
        if(categoryId == 0) {
            alert('browseSearch select all products. \nneed to figure out how to get dispatch() to work from here')
        } else {
            alert('browseSearch select products for category: ' + categoryId + '. \nneed to figure out how to get dispatch() to work from here')
        }
    }

    function handleSearch(e){
        e.preventDefault()
        // let searchTerms = e.target.value
        alert('handleSearch for search term/s ' + e.target.searchTerms.value + '. \nneed to figure out how to get dispatch() to work from here')
    }
        
    function handlers() {
        return {
            handleChange: handleChange,
            handleSearch: handleSearch,
        }
    }

    const productCategories = useSelector(selectProductCategories)

    return <BrowseSearchDisplay  data={ productCategories } handlers={handlers()}/>
}