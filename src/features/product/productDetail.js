import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ProductDetailDisplay from '../../components/product/ProductDetailDisplay'

import { selectProduct, getProductById } from '../products/productsSlice'

import { mockProduct } from '../../utils/mockData'

function handleAddToCart(){
    alert('handleAddToCart')
}

export default function ProductDetail ( props ) {
    let { productId } = props
    CheckLoginStatus()

    const dispatch = useDispatch()

    const productData = useSelector(selectProduct)
    // const productData = mockProduct
    
    useEffect(() => {
        // console.log('useEffect()')
        dispatch(getProductById(productId));
    },[])

    return <ProductDetailDisplay data={productData} handleAddToCart={ handleAddToCart }/>
}