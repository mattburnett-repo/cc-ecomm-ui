
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ProductsListingDisplay from "../../components/products/ProductsListingDisplay";

import { selectProducts, getProducts, getProductsByCategory } from '../products/productsSlice'
import { selectCurrentProductCategory } from "../productCategory/productCategorySlice";

export default function ProductsListing () {
    CheckLoginStatus()

    const dispatch = useDispatch()

    const currentProductCategory = useSelector(selectCurrentProductCategory)

    useEffect(() => {
        if(currentProductCategory == 0) {
            dispatch(getProducts())
        } else {
            dispatch(getProductsByCategory(currentProductCategory))
        }
    // eslint-disable-next-line
    }, [currentProductCategory])

    return <ProductsListingDisplay data={ useSelector(selectProducts)} />
}