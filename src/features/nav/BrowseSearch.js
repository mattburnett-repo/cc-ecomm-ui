import { useSelector } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import BrowseSearchDisplay from '../../components/nav/BrowseSearchDisplay';

import { selectProductCategories } from "../productCategory/productCategorySlice";

function handleChange(){
    alert('handleChange')
}
function handleSearch(){
    alert('handleSearch')
}

export default function BrowseSearch () {
    CheckLoginStatus()

    const productCategories = useSelector(selectProductCategories)

    return <BrowseSearchDisplay  data={ productCategories } handleChange={handleChange} handleSearch={handleSearch}/>
}