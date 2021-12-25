import { useSelector } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import BrowseSearchDisplay from '../../components/nav/BrowseSearchDisplay';

import { selectProductCategories } from "../productCategory/productCategorySlice";

// TODO: should send handleChange, handleSearch as props

export default function BrowseSearch () {
    CheckLoginStatus()

    const productCategories = useSelector(selectProductCategories)

    return <BrowseSearchDisplay  data={ productCategories } />
}