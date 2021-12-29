// this is broken. trying to get selectors / promises / dispatch working

import { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { selectJwtToken } from '../auth/authSlice';

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ProductDetailDisplay from '../../components/product/ProductDetailDisplay'

export default function ProductDetail ( props ) {
    const [productData, setProductData] = useState('')
    let { productId } = props

    let authToken = useSelector(selectJwtToken)

    CheckLoginStatus()

    function handleAddToCart(){
        alert('handleAddToCart')
    }

    async function fetchProduct(productId) {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
        const apiEndpoint = `/api/v1/product/${productId}`
        const theUrl = API_BASE_URL + apiEndpoint

        console.log('theUrl ', theUrl )

        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`},
            credentials: 'include',
        };

        const response = await fetch(theUrl, requestOptions);
        const data = await response.json();

        setProductData(data)
    }
    
    useEffect(() => {
        fetchProduct(productId)
    }, [productId])
    
    return <ProductDetailDisplay data={productData} handleAddToCart={ handleAddToCart }/>
}