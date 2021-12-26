import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ProductDetailDisplay from '../../components/product/ProductDetailDisplay'

import { selectProduct, getProductById } from '../products/productsSlice'

// import { mockProduct } from '../../utils/mockData'

function handleAddToCart(){
    alert('handleAddToCart')
}

export default function ProductDetail ( props ) {
    const { productId } = props
    CheckLoginStatus()

    const dispatch = useDispatch()
    const productData = useSelector(selectProduct)

    useEffect(() => {
        async function loadData() {
            await dispatch(getProductById(productId))
        };
        loadData();
    },[productId, dispatch])
    
    return <ProductDetailDisplay data={ productData } handleAddToCart={ handleAddToCart }/>
}