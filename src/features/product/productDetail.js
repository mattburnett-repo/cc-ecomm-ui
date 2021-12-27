import { useEffect } from 'react'
import { useSelector } from "react-redux";
import { selectJwtToken } from '../auth/authSlice';

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ProductDetailDisplay from '../../components/product/ProductDetailDisplay'

import { mockProduct } from '../../utils/mockData'

export default function ProductDetail ( props ) {
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
        const resStatus = response.status
        const data = await response.json();

        console.log('response status ', resStatus)
        console.log('data ', data) // this has the product data we need

        return data
    }
    
    const productData = fetchProduct(productId)    
    
    // useEffect(() => {
    //     fetchProduct(productId).then()
    // },[productId])

    console.log('after useEffect productData ', productData)

    return <ProductDetailDisplay data={productData} handleAddToCart={ handleAddToCart }/>
}