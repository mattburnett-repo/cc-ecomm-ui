
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import BrowseSearchDisplay from '../../components/nav/BrowseSearchDisplay';

import { setCurrentProductCategory } from "../productCategory/productCategoryActions";
import { selectProductCategories } from '../productCategory/productCategorySlice'

import { searchProducts } from '../products/productsSlice'

export default function BrowseSearch () {
    CheckLoginStatus()

    const productCategories = useSelector(selectProductCategories)

    const dispatch = useDispatch()

    async function handleChange(e){
        await dispatch(setCurrentProductCategory(e.target.value))
    }

    async function handleSearch(e) {
        e.preventDefault()

        let searchTerm = e.target.searchTerms.value
        await dispatch(searchProducts({searchTerm}))
    }

    function handlers() {
        return {
            handleChange: handleChange,
            handleSearch: handleSearch,
        }
    }
    
    return <BrowseSearchDisplay  data={ productCategories } handlers={handlers()}/>
}