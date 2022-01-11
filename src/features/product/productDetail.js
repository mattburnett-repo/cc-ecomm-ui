
import { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { selectJwtToken } from '../auth/authSlice';

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ProductDetailDisplay from '../../components/product/ProducDisplay'

export default function ProductDetail ( props ) {
    const [productData, setProductData] = useState('')

    let productId = parseInt(props.match.params.id, 10)
    
    let authToken = useSelector(selectJwtToken)

    CheckLoginStatus()

    // TODO: you can also do it this way, using Redux ->
    //      const theProducts = useSelector(selectProducts)
    //      theProducts.filter(item => item.id == productId)

    async function fetchProduct(productId) {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
        const apiEndpoint = `/api/v1/product/${productId}`
        const theUrl = API_BASE_URL + apiEndpoint

        // console.log('theUrl ', theUrl )

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId])
    
    return <ProductDetailDisplay data={productData} />
}